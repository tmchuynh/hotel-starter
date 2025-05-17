/**
 * Converts an object with day, month, and year properties into a JavaScript Date object.
 * Note: Month is 0-indexed in JavaScript Date (0 = January, 11 = December),
 * but we assume the input month is 1-indexed (1 = January, 12 = December).
 *
 * @param date - An object containing day, month, and year properties.
 * @returns A JavaScript Date object representing the input date.
 */
export function convertToDate(date: {
  day: number;
  month: number;
  year: number;
}): string {
  // Subtract 1 from month because JavaScript Date months are 0-indexed
  const newDate = new Date(date.year, date.month - 1, date.day);
  return newDate.toLocaleDateString();
}

export function convertPrice(price: number, type: "MA" | "AM"): number {
  if (type === "MA") {
    return price * 12;
  } else if (type === "AM") {
    return price / 12;
  } else {
    throw new Error("Invalid conversion type. Use 'MA' or 'AM'.");
  }
}
