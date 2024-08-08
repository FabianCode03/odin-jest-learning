function isLetter(char: string): boolean {
  return /^[a-zA-Z]$/.test(char);
}

function findNewCharacter(
  oldChar: string,
  alphabet: string[],
  shiftFactor: number,
): string {
  const isUpperCase = oldChar === oldChar.toUpperCase();
  const lowerChar = oldChar.toLowerCase();
  const oldIndex = alphabet.findIndex((char) => char === lowerChar);
  if (oldIndex === -1) {
    return oldChar;
  }
  const newIndex = (oldIndex + shiftFactor) % alphabet.length;
  const newChar = alphabet[newIndex];
  return isUpperCase ? newChar.toUpperCase() : newChar;
}

export default function caesarCipher(str: string, shiftFactor: number): string {
  const alphabet: string[] = Array.from('abcdefghijklmnopqrstuvwxyz');
  const stringArray: string[] = Array.from(str);
  let shiftedStringArray: string[] = [];

  stringArray.forEach((char) => {
    if (isLetter(char)) {
      const newCharacter = findNewCharacter(char, alphabet, shiftFactor);
      shiftedStringArray.push(newCharacter);
    } else {
      shiftedStringArray.push(char);
    }
  });
  return shiftedStringArray.join('');
}
