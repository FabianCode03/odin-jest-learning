import caesarCipher from './caesarCipher';

interface CaesarCipherTestCase {
  description: string;
  input: string;
  output: string;
  shiftFactor: number;
}

const testCases: CaesarCipherTestCase[] = [
  {
    description: 'returns original string if shiftFactor == 0',
    input: 'test',
    output: 'test',
    shiftFactor: 0,
  },
  {
    description: 'returns shifted string if shiftFactor == 1',
    input: 'test',
    output: 'uftu',
    shiftFactor: 1,
  },
  {
    description: 'returns shifted string if shiftFactor == 3',
    input: 'test',
    output: 'whvw',
    shiftFactor: 3,
  },
  {
    description:
      'returns shifted string if shiftFactor == 3 (including uppercase letters)',
    input: 'TEST',
    output: 'WHVW',
    shiftFactor: 3,
  },
  {
    description: "ignores special characters and doesn't convert them",
    input: '&"Test"!',
    output: '&"Whvw"!',
    shiftFactor: 3,
  },
  {
    description: 'ignores white spaces and leaves them in',
    input: '&"Te st" !',
    output: '&"Wh vw" !',
    shiftFactor: 3,
  },
  {
    description: 'wraps around from z to a',
    input: 'xyz',
    output: 'abc',
    shiftFactor: 3,
  },
];

describe('function that shifts a given string by a given amount, character wise,', () => {
  testCases.forEach(
    ({ description, input, output, shiftFactor }: CaesarCipherTestCase) =>
      test(description, () => {
        expect(caesarCipher(input, shiftFactor)).toEqual<string>(output);
      }),
  );
});
