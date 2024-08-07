export function capitalize(str: string): string {
  const newString = str.replace(/^\w/, (c) => c.toUpperCase());
  return newString;
}
