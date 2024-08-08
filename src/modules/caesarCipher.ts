function isLetter(char: string): boolean {
  return /^[a-zA-Z]$/.test(char);
}

function shiftCharacter(char: string, shiftFactor: number): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const isUpperCase = char === char.toUpperCase();
  const lowerChar = char.toLowerCase();
  const oldIndex = alphabet.indexOf(lowerChar);

  let newIndex = (oldIndex + shiftFactor) % alphabet.length;
  if (newIndex < 0) {
    newIndex += alphabet.length;
  }
  const newChar = alphabet[newIndex];

  return isUpperCase ? newChar.toUpperCase() : newChar;
}

export default function caesarCipher(str: string, shiftFactor: number): string {
  return Array.from(str)
    .map((char) => (isLetter(char) ? shiftCharacter(char, shiftFactor) : char))
    .join('');
}
