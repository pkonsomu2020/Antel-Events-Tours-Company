/**
 * Format price consistently across the application
 * @param price - Price as number or string
 * @param includeDecimals - Whether to include decimal places (default: false)
 * @returns Formatted price string (e.g., "KSh 25,000")
 */
export function formatPrice(price: number | string, includeDecimals = false): string {
  const numPrice = typeof price === 'string' ? parseFloat(price.replace(/[^0-9.]/g, '')) : price;
  
  if (isNaN(numPrice)) {
    return "KSh 0";
  }
  
  const formatted = includeDecimals 
    ? numPrice.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : numPrice.toLocaleString('en-KE');
  
  return `KSh ${formatted}`;
}

/**
 * Parse price string to number
 * @param priceString - Price string (e.g., "KSH.25000", "KSh 25,000")
 * @returns Price as number
 */
export function parsePrice(priceString: string): number {
  const cleaned = priceString.replace(/[^0-9.]/g, '');
  return parseFloat(cleaned) || 0;
}
