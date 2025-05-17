/**
 * Formats a given date string into the format 'YYYY-MM-DD'.
 *
 * @param dateString - The date string to format.
 * @returns The formatted date string in 'YYYY-MM-DD' format.
 * @throws Will throw an error if the provided date string is invalid.
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateString}`);
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/**
 * Formats a number as a currency string with exactly two decimal places.
 *
 * @param value - The numeric value to format.
 * @returns A string representing the formatted currency value with two decimal places.
 *          If the input is not a number, it returns "$0.00".
 */
export const formatCurrency = (value: number) => {
  if (isNaN(value)) return "$0.00";

  // Format with fixed 2 decimal places first
  const fixedValue = parseFloat(value.toFixed(2));

  // Then apply locale formatting for currency
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(fixedValue);
};

export const formatPhoneNumber = (value: string): string => {
  // Strip all non-numeric characters
  const numbers = value.replace(/\D/g, "");

  // Return the input as-is if it contains fewer than 10 digits
  if (numbers.length < 10) {
    return value;
  }

  // Format based on the length of the input
  if (numbers.length === 0) {
    return "";
  } else if (numbers.length <= 3) {
    return `(${numbers}`;
  } else if (numbers.length <= 6) {
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
  } else {
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
      6,
      10
    )}`;
  }
};

export const formatCreditCardNumber = (value: string): string => {
  // Validate input and strip all non-numeric characters
  if (typeof value !== "string" || value.trim() === "") {
    return "";
  }
  const numbers = value.replace(/\D/g, "");

  // Add a space after every 4 digits
  return numbers.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
};

/**
 * Compares the word count of a string against a maximum threshold.
 *
 * @param text - The string to check word count for
 * @param maxWords - The maximum number of words allowed
 * @returns `true` if the text contains fewer or equal words than the maximum, `false` otherwise
 * @throws {Error} When maxWords is negative
 *
 * @example
 * ```typescript
 * // Returns true as the string has 5 words
 * compareStringWordCount("This is a simple example", 5);
 *
 * // Returns false as the string has 5 words
 * compareStringWordCount("This is a simple example", 4);
 * ```
 */
export function compareStringWordCount(
  text: string,
  maxWords: number
): boolean {
  if (maxWords < 0) {
    throw new Error("Maximum words must be a non-negative number.");
  }

  const words = text.trim().split(/\s+/);
  return words.length <= maxWords;
}

/**
 * Clips a string to a specified maximum length.
 *
 * @param {string} text - The string to be clipped
 * @param {number} maxLength - The maximum length allowed for the string
 * @returns {string} The original string if its length is less than or equal to maxLength,
 *                   otherwise the string truncated to maxLength characters
 */
export function clipString(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength);
}

/**
 * Formats a number by rounding it to the nearest hundred and adding commas as thousand separators.
 *
 * @param value - The number to format.
 * @returns The formatted number as a string.
 */
export function formatNumber(value: number): string {
  return (Math.round(value / 100) * 100)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Capitalizes a string by replacing hyphens and underscores with spaces,
 * and converting the first character of each word to uppercase.
 *
 * Numbers and special characters are preserved as-is and do not affect capitalization.
 *
 * @param str - The input string to capitalize.
 * @returns The capitalized string with hyphens and underscores replaced by spaces.
 *
 * @example
 * ```typescript
 * capitalize("hello-world"); // Returns "Hello World"
 * capitalize("hello_world"); // Returns "Hello World"
 * capitalize("hello world"); // Returns "Hello World"
 * capitalize("123-hello_world"); // Returns "123 Hello World"
 * capitalize("hello@world"); // Returns "Hello@World"
 * ```
 */
export const capitalize = (str: string) => {
  return str
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/\b[a-zA-Z]/g, (char) => char.toUpperCase());
};

export const formatItemName = (itemName: string) => {
  // List of words to not capitalize
  const exceptions = [
    "and",
    "or",
    "a",
    "an",
    "as",
    "at",
    "but",
    "by",
    "for",
    "in",
    "nor",
    "of",
    "on",
    "the",
    "up",
  ];

  return itemName
    .split("_") // Split the item name by underscores
    .map((word, index) => {
      // Capitalize the first word, or any word that's not an exception
      if (index === 0 || !exceptions.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      // Keep the word in lowercase if it's in the exceptions list
      return word.toLowerCase();
    })
    .join(" "); // Join the words back into a string
};

export const formatURL = (url: string): string => {
  return url.toLowerCase().replaceAll(" ", "-").replaceAll("'s", "");
};

export const sortObjectsByKey = <T extends Record<string, any>>(
  arr: T[],
  key: keyof T
): T[] => {
  return [...arr].sort((a, b) => String(a[key]).localeCompare(String(b[key])));
};

export const formatToURL = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple hyphens with a single one
    .replace(/^-+|-+$/g, ""); // Trim hyphens from start and end
};

export function toKebabCase(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Insert a hyphen between lowercase and uppercase letters
    .toLowerCase(); // Convert the entire string to lowercase
}

export const formatUrlToID = (url: string): string => {
  const string = url
    .replaceAll(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  return string.charAt(0).toLowerCase() + string.slice(1).replace(/\s+/g, "");
};
