import analyzeArray from './analyzeArray';
import { NumberArrayFacts } from './analyzeArray';

describe('a function that collects facts about a given number array', () => {
  describe('average', () => {
    test('positive whole numbers with whole number average(1)', () => {
      const input: number[] = [1, 2, 3, 4, 5];
      const output: NumberArrayFacts = {
        average: 3,
        length: expect.anything(),
        max: expect.anything(),
        min: expect.anything(),
      };
      expect(analyzeArray(input)).toEqual(output);
    });

    test('positive whole numbers with whole number average(2)', () => {
      const input: number[] = [10, 1, 30, 14, 25];
      const output: NumberArrayFacts = {
        average: 16,
        length: expect.anything(),
        max: expect.anything(),
        min: expect.anything(),
      };
      expect(analyzeArray(input)).toEqual(output);
    });

    test('empty array should output average == NaN', () => {
      const input: number[] = [];
      const output: NumberArrayFacts = {
        average: NaN,
        length: expect.anything(),
        max: expect.anything(),
        min: expect.anything(),
      };
      expect(analyzeArray(input)).toEqual(output);
    });

    test('[0] should output average == 0', () => {
      const input: number[] = [0];
      const output: NumberArrayFacts = {
        average: 0,
        length: expect.anything(),
        max: expect.anything(),
        min: expect.anything(),
      };
      expect(analyzeArray(input)).toEqual(output);
    });

    test('array of negative numbers should output a negative average', () => {
      const input: number[] = [-2, -5, -2];
      const output: NumberArrayFacts = {
        average: -3,
        length: expect.anything(),
        max: expect.anything(),
        min: expect.anything(),
      };
      expect(analyzeArray(input)).toEqual(output);
    });

    test('array of equal negative and positive value should output average == 0', () => {
      const input: number[] = [-2, -5, 5, 2];
      const output: NumberArrayFacts = {
        average: 0,
        length: expect.anything(),
        max: expect.anything(),
        min: expect.anything(),
      };
      expect(analyzeArray(input)).toEqual(output);
    });

    test('positive, non devisable sum should output decimal average', () => {
      const input: number[] = [4, 5, 8, 2];
      const output: NumberArrayFacts = {
        average: 4.75,
        length: expect.anything(),
        max: expect.anything(),
        min: expect.anything(),
      };
      expect(analyzeArray(input)).toEqual(output);
    });

    test('negative, non devisable sum should output negative decimal average', () => {
      const input: number[] = [-4, -5, -8, -2];
      const output: NumberArrayFacts = {
        average: -4.75,
        length: expect.anything(),
        max: expect.anything(),
        min: expect.anything(),
      };
      expect(analyzeArray(input)).toEqual(output);
    });
  });
  describe('min', () => {
    test('finds minimum in array of positive numbers', () => {
      const input: number[] = [4, 5, 8, 2];
      const output: NumberArrayFacts = {
        average: expect.anything(),
        length: expect.anything(),
        max: expect.anything(),
        min: 2,
      };
      expect(analyzeArray(input)).toEqual(output);
    });

    test('finds minimum in array of negative numbers', () => {
      const input: number[] = [-4, -5, -8, -2];
      const output: NumberArrayFacts = {
        average: expect.anything(),
        length: expect.anything(),
        max: expect.anything(),
        min: -8,
      };
      expect(analyzeArray(input)).toEqual(output);
    });

    test('finds NaN for min of empty array', () => {
      const input: number[] = [];
      const output: NumberArrayFacts = {
        average: expect.anything(),
        length: expect.anything(),
        max: expect.anything(),
        min: NaN,
      };
      expect(analyzeArray(input)).toEqual(output);
    });

    test('finds min of close decimal numbers', () => {
      const input: number[] = [2.223, 2.333, 2.2231];
      const output: NumberArrayFacts = {
        average: expect.anything(),
        length: expect.anything(),
        max: expect.anything(),
        min: 2.223,
      };
      expect(analyzeArray(input)).toEqual(output);
    });
  });
  describe('max', () => {
    test('finds maximum in array of positive numbers', () => {
      const input: number[] = [4, 5, 8, 2];
      const output: NumberArrayFacts = {
        average: expect.anything(),
        length: expect.anything(),
        max: 8,
        min: expect.anything(),
      };
      expect(analyzeArray(input)).toEqual(output);
    });

    test('finds maximum in array of negative numbers', () => {
      const input: number[] = [-4, -5, -8, -2];
      const output: NumberArrayFacts = {
        average: expect.anything(),
        length: expect.anything(),
        max: -2,
        min: expect.anything(),
      };
      expect(analyzeArray(input)).toEqual(output);
    });

    test('finds NaN for max of empty array', () => {
      const input: number[] = [];
      const output: NumberArrayFacts = {
        average: expect.anything(),
        length: expect.anything(),
        max: NaN,
        min: expect.anything(),
      };
      expect(analyzeArray(input)).toEqual(output);
    });

    test('finds max of close decimal numbers', () => {
      const input: number[] = [2.223, 2.333, 2.2231];
      const output: NumberArrayFacts = {
        average: expect.anything(),
        length: expect.anything(),
        max: 2.333,
        min: expect.anything(),
      };
      expect(analyzeArray(input)).toEqual(output);
    });
  });
  describe('length', () => {
    test('finds length for an array with some values', () => {
      const input: number[] = [2.223, 2.333, 2.2231];
      const output: NumberArrayFacts = {
        average: expect.anything(),
        length: 3,
        max: expect.anything(),
        min: expect.anything(),
      };
      expect(analyzeArray(input)).toEqual(output);
    });

    test('outputs length == 0 for empty array', () => {
      const input: number[] = [];
      const output: NumberArrayFacts = {
        average: expect.anything(),
        length: 0,
        max: expect.anything(),
        min: expect.anything(),
      };
      expect(analyzeArray(input)).toEqual(output);
    });
  });
});
