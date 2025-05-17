import { shuffleArray } from "./sort";

export function getCardType(cardNumber: string): string | null {
  // Remove spaces and dashes
  const sanitizedNumber = cardNumber.replace(/[\s-]/g, "");

  // Visa
  if (/^4/.test(sanitizedNumber)) return "Visa";

  // Mastercard
  if (/^(5[1-5]|2[2-7])/.test(sanitizedNumber)) return "MasterCard";

  // American Express
  if (/^3[47]/.test(sanitizedNumber)) return "American Express";

  // Discover
  if (
    /^(6011|65|64[4-9]|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]))/.test(
      sanitizedNumber
    )
  )
    return "Discover";

  // Diners Club
  if (/^3(0[0-5]|[68])/.test(sanitizedNumber)) return "Diners Club";

  // JCB
  if (/^35/.test(sanitizedNumber)) return "JCB";

  // UnionPay
  if (/^62/.test(sanitizedNumber)) return "UnionPay";

  return null;
}

export function getRandomIndex<T>(array: T[]): number {
  if (array.length === 0) {
    throw new Error("Array cannot be empty");
  }
  return Math.floor(Math.random() * array.length);
}

export function getRandomEntries<T>(array: T[], count: number): T[] {
  // Handle edge cases
  if (!array || array.length === 0) {
    return [];
  }

  // Ensure count is not negative and not larger than the array length
  count = Math.min(Math.max(0, count), array.length);

  if (count === 0) {
    return [];
  }

  // If we want all items, just create a copy of the array to avoid modifying the original
  if (count === array.length) {
    return [...array];
  }

  // Create a copy of the array to avoid modifying the original
  const shuffled = shuffleArray([...array]);

  // Return the first 'count' elements
  return shuffled.slice(0, count);
}

export async function getToolResource(
  toolKit: string,
  tool: string,
  toolKitID: string
): Promise<any> {
  try {
    const toolModule = await import(
      `@/lib/resources/toolkits/tools/${toolKit}/${tool}`
    );
    // Return the specific named export that matches toolKitID
    if (toolModule[toolKitID]) {
      return toolModule[toolKitID];
    } else {
      console.error(`Export named ${toolKitID} not found in module`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading resource: ${error}`);
    return [];
  }
}

export async function getArticleInformation(
  article: string,
  articleID: string
): Promise<any> {
  try {
    const articleModule = await import(`@/lib/resources/articles/${article}`);
    // Return the specific named export that matches articleID
    if (articleModule[articleID]) {
      return articleModule[articleID];
    } else {
      console.error(`Export named ${articleID} not found in module`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading resource: ${error}`);
    return [];
  }
}
