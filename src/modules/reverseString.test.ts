import reverseString from './reverseString';
import TestCase from './TestCase_interface';

const testCases: TestCase[] = [
  {
    description: 'should not change a palindrome (all lowercase)',
    input: 'otto',
    expectedOutput: 'otto',
  },
  {
    description: 'should change a palindrome (not lowercase)',
    input: 'Otto',
    expectedOutput: 'ottO',
  },
  {
    description: 'should not modify empty string',
    input: '',
    expectedOutput: '',
  },
  {
    description: 'should work with numbers',
    input: '1234567',
    expectedOutput: '7654321',
  },
  {
    description: 'should reverse words with uneven characters',
    input: 'Helen',
    expectedOutput: 'neleH',
  },
  {
    description: 'should work with special characters',
    input: '.3=!_',
    expectedOutput: '_!=3.',
  },
  {
    description: 'should work with spaces',
    input: 'Hey Everyone',
    expectedOutput: 'enoyrevE yeH',
  },
];

describe('function that reverses a String', () => {
  testCases.forEach(({ description, input, expectedOutput }: TestCase) => {
    test(description, () => {
      expect(reverseString(input)).toBe(expectedOutput);
    });
  });
});
