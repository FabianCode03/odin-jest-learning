export default function reverseString(str: string): string {
  const charArray = str.split('');
  let left: number = 0;
  let right: number = str.length - 1;

  while (left < right) {
    const store = charArray[left];
    charArray[left] = charArray[right];
    charArray[right] = store;

    left += 1;
    right -= 1;
  }
  return charArray.join('');
}
