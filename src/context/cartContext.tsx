"use client";

import { currencyCountries } from "@/lib/constants/countriesConstant";
import { CartContextType, CartItem } from "@/lib/interfaces&types/cart";
import React, {
  createContext,
  JSX,
  useContext,
  useEffect,
  useState,
} from "react";
import { useCurrency } from "./currencyContext";

const CartContext = createContext<CartContextType | undefined>(undefined);

// -------------------
// Helper Functions
// -------------------

/**
 * Searches for a country in the currencyCountries array and returns its currency information
 * @param targetValue - The country value to search for (case-insensitive)
 * @returns An object containing the currency code, country value, and distance factor if found, null otherwise
 * @returns {Object} result
 * @returns {string} result.currencyCode - The currency code associated with the country
 * @returns {string} result.value - The original country value
 * @returns {number} result.distanceFactor - The distance factor for shipping calculations
 * @returns {null} When no matching country is found
 */
const findCountryByValue = (
  targetValue: string
): { currencyCode: string; value: string; distanceFactor: number } | null => {
  const normalizedTarget = targetValue.toUpperCase();
  for (const currency of currencyCountries) {
    const countryData = currency.countries.find(
      (country) => country.value.toUpperCase() === normalizedTarget
    );
    if (countryData) {
      return {
        currencyCode: currency.code,
        value: countryData.value,
        distanceFactor: countryData.distanceFactor,
      };
    }
  }
  return null;
};

// -------------------
// CartProvider Component
// -------------------

/**
 * Provider component for managing shopping cart functionality in an e-commerce application.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped by the provider
 *
 * @remarks
 * Handles cart operations including:
 * - Adding/removing items
 * - Quantity updates
 * - Price calculations
 * - Discount management
 * - Shipping calculations
 * - Tax calculations (domestic & international)
 * - Sales tracking
 * - Cart persistence
 *
 * Features:
 * - Local storage integration for cart persistence
 * - International shipping support
 * - Multiple shipping methods
 * - Discount code system
 * - Sales history tracking
 * - Delivery date estimation
 * - Wishlist integration
 *
 * @example
 * ```tsx
 * <CartProvider>
 *   <App />
 * </CartProvider>
 * ```
 *
 * @returns {JSX.Element} A context provider that wraps child components with cart functionality
 */
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  const { calculateImportTaxes } = useCurrency();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const [discountAmount, setDiscountAmount] = useState<number>(0);

  // Discount codes table
  const discountCodes: Record<string, number> = {
    WELCOME10: 0.1,
    SUMMER25: 0.25,
    FREESHIP: 0.15,
  };

  // Rehydrate cart items from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Persist cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // -------------------
  // Cart Functions
  // -------------------

  /**
   * Adds an item to the shopping cart.
   * If the item already exists in the cart, its quantity will be increased.
   * If the item is new, it will be added as a new entry.
   * Also updates the product sales statistics.
   *
   * @param item - The cart item to be added
   * @param item.name - Name of the product
   * @param item.quantity - Quantity to be added
   * @returns void
   *
   * @example
   * addToCart({ name: "Product", quantity: 1 });
   */
  const addToCart = (item: CartItem): void => {
    if (itemExistsInCart(item.name)) {
      setCartItems((prevItems) =>
        prevItems.map((existingItem) =>
          existingItem.name === item.name
            ? {
                ...existingItem,
                quantity: existingItem.quantity + item.quantity,
              }
            : existingItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  /**
   * Removes an item from the cart based on its ID
   * @param id - The unique identifier of the item to be removed
   * @returns void
   */
  const removeFromCart = (productName: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productName)
    );
  };

  /**
   * Clears all items from the shopping cart by setting the cart items array to empty.
   * This function resets the cart state to its initial empty state.
   * @returns {void}
   */
  const clearCart = (): void => {
    setCartItems([]);
  };

  /**
   * Updates the quantity of a specific item in the cart.
   * If the quantity is set to 0, the item is removed from the cart.
   *
   * @param id - The unique identifier of the cart item
   * @param quantity - The new quantity to set for the cart item
   * @returns void
   *
   * @example
   * // To update quantity of item with id "123" to 5
   * updateQuantity("123", 5)
   *
   * // To remove item with id "123" from cart
   * updateQuantity("123", 0)
   */
  const updateQuantity = (productName: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productName);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === productName ? { ...item, quantity: quantity } : item
      )
    );
  };

  /**
   * Retrieves a cart item by its name from the cart items array.
   * @param name - The name of the cart item to find.
   * @returns The matching CartItem object if found, undefined otherwise.
   */
  const getCartItem = (name: string): CartItem | undefined => {
    return cartItems.find((item) => item.name === name);
  };

  /**
   * Calculates the subtotal of all items in the cart.
   * Multiplies each item's price by its quantity and sums all products.
   *
   * @returns {number} The total price of all items in the cart
   */
  const getSubTotal = (): number => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };

  /**
   * Calculates the tax amount based on the total price and country.
   *
   * @param total - The total amount to calculate tax on
   * @param country - The country code for tax calculation (defaults to "USA")
   * @returns The calculated tax amount as a number
   *
   * @remarks
   * - For USA, applies a standard 8% domestic tax rate
   * - For other countries, calculates VAT/GST using country-specific rates
   *
   * @example
   * ```typescript
   * // Calculate US tax
   * const usTax = calculateTaxAmount(100); // Returns 8
   *
   * // Calculate international tax
   * const ukTax = calculateTaxAmount(100, "UK");
   * ```
   */
  const calculateTaxAmount = (
    total: number,
    country: string = "USA"
  ): number => {
    // If USA, use standard domestic tax rate
    if (country === "USA") {
      const domesticTaxRate = 0.08; // 8% standard domestic tax rate
      return total * domesticTaxRate;
    }

    // For international, calculate VAT/GST based on country-specific rates
    const { vatAmount } = calculateImportTaxes(total, country);
    return vatAmount;
  };

  /**
   * Calculates the total number of items in the shopping cart.
   * @returns {number} The sum of quantities of all items in the cart.
   */
  const getTotalItems = (): number => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  /**
   * Calculates the total price of the cart including shipping, taxes, and international fees.
   *
   * @param shippingCountry - The country code where the order will be shipped to (defaults to "USA")
   * @returns The total price including all applicable fees, taxes and shipping costs
   *
   * @remarks
   * The total price calculation includes:
   * - Subtotal of all items in cart
   * - Shipping costs based on selected shipping method
   * - International shipping fees if applicable
   * - Import taxes for international orders
   * - Sales tax for domestic (USA) orders
   *
   * If the shipping country is invalid or not found, returns 0.
   *
   * For international orders (non-USA), import taxes are added if applicable.
   * For domestic orders (USA), standard sales tax is applied.
   */
  const getTotalPrice = (shippingCountry: string = "USA"): number => {
    const countryData = findCountryByValue(shippingCountry);
    if (!countryData) {
      return 0;
    }

    // Calculate subtotal
    const subtotal = cartItems.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );

    const taxAmount = calculateTaxAmount(subtotal, shippingCountry);

    return taxAmount;
  };

  /**
   * Checks if an item exists in the cart based on its name.
   *
   * @param name - The name of the item to search for in the cart
   * @returns The CartItem object if found, undefined otherwise
   *
   * @example
   * const item = itemExistsInCart("Product Name");
   */
  const itemExistsInCart = (name: string): CartItem | undefined => {
    return cartItems.find((item) => item.name === name);
  };

  /**
   * Validates and applies a discount code to the cart.
   *
   * @param code - The discount code entered by the user
   * @returns {boolean} - Returns true if the discount code is valid and applied successfully, false otherwise
   *
   * @example
   * // Returns true and applies 20% discount
   * applyDiscount("SUMMER20")
   *
   * // Returns false for invalid code
   * applyDiscount("INVALID")
   */
  const applyDiscount = (code: string): boolean => {
    const normalizedCode = code.trim().toUpperCase();
    if (discountCodes[normalizedCode]) {
      setDiscountCode(normalizedCode);
      setDiscountAmount(discountCodes[normalizedCode]);
      return true;
    }
    return false;
  };

  /**
   * Calculates the total price after applying any available discount
   * @param shippingCountry - The country code where items will be shipped to
   * @returns The final price after discount has been applied, or the original subtotal if no discount exists
   */
  const getDiscountedTotal = (shippingCountry: string): number => {
    const subtotal = getTotalPrice(shippingCountry);
    return discountAmount > 0 ? subtotal * (1 - discountAmount) : subtotal;
  };

  /**
   * Loads the previously saved cart state from localStorage.
   * If a saved cart exists, it restores:
   * - Cart items
   * - Applied discount code
   * - Discount amount
   * If no saved cart is found, the cart state remains unchanged.
   *
   * @returns void
   */
  const loadSavedCart = (): void => {
    const savedCart = localStorage.getItem("savedCart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart.items || []);
      setDiscountCode(parsedCart.discountCode || null);
      setDiscountAmount(parsedCart.discountAmount || 0);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartItem,
        updateQuantity,
        calculateTaxAmount,
        getTotalPrice,
        getSubTotal,
        getTotalItems,
        itemExistsInCart,
        applyDiscount,
        getDiscountedTotal,
        loadSavedCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
