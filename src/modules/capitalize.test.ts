import { capitalize } from './capitalize';
import TestCase from './TestCase_interface';

const testCases: TestCase[] = [
  {
    description: 'capitalized string stays the same',
    input: 'Fabian',
    expectedOutput: 'Fabian',
  },
  {
    description: 'empty string is unchanged',
    input: '',
    expectedOutput: '',
  },
  {
    description: 'Works with special characters',
    input: '!',
    expectedOutput: '!',
  },
  {
    description: 'lowercase strings are capitalized (1)',
    input: 'fabian',
    expectedOutput: 'Fabian',
  },
  {
    description: 'lowercase strings are capitalized (2)',
    input: 'helen',
    expectedOutput: 'Helen',
  },
  {
    description: 'lowercase strings are capitalized (3)',
    input: 'fiona',
    expectedOutput: 'Fiona',
  },
];

describe('function that capitalizes first character of the String', () => {
  testCases.forEach(({ description, input, expectedOutput }) => {
    test(description, () => {
      expect(capitalize(input)).toBe(expectedOutput);
    });
  });
});
