export type ShippingMethod =
  | "standard"
  | "economy"
  | "twoDay"
  | "expedited"
  | "sameDay"
  | "overnight";

export interface ProductItem {
  name: string;
  price: string | number;
  description: string;
  imageSrc: string;
  highlights: string[];
  isLimited?: boolean;
  isNew?: boolean;
  isOnSale?: boolean;
  featured?: boolean;
  originalPrice?: number;
  discountPrice?: number;
  options?: { name: string; value: string }[];
}

export interface CartItem extends ProductItem {
  id: string;
  quantity: number;
  color?: string;
  size?: string;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getCartItem: (name: string) => CartItem | undefined;
  updateQuantity: (id: string, quantity: number) => void;
  calculateTaxAmount: (total: number, country: string) => number;
  getTotalPrice: (country: string) => number;
  getSubTotal: () => number;
  getTotalItems: () => number;
  itemExistsInCart: (name: string) => CartItem | undefined;
  applyDiscount: (code: string) => boolean;
  getDiscountedTotal: (country: string) => number;
  loadSavedCart: () => void;
}
