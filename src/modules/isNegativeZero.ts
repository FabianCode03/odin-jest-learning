export default function isNegativeZero(value: number): boolean {
  return Object.is(value, -0);
}
