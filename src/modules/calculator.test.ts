import calculator from './calculator';

describe('a basic calculator that performs +, -, *, and /', () => {
  describe('addition', () => {
    test('add two positive numbers', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test('add two negative numbers', () => {
      expect(calculator.add(-1, -2)).toBe(-3);
    });

    test('add a positive and a negative number', () => {
      expect(calculator.add(1, -2)).toBe(-1);
    });

    test('add 0 to a non zero number', () => {
      expect(calculator.add(0, -2)).toBe(-2);
    });

    test('0 + 0 => 0', () => {
      expect(calculator.add(0, 0)).toBe(0);
    });
  });

  describe('subtraction', () => {
    test('subtract two positive numbers', () => {
      expect(calculator.sub(1, 2)).toBe(-1);
    });

    test('subtract two negative numbers', () => {
      expect(calculator.sub(-1, -2)).toBe(1);
    });

    test('subtract a negative from a positive number', () => {
      expect(calculator.sub(1, -2)).toBe(3);
    });

    test('subtract a positive from a negative number', () => {
      expect(calculator.sub(-1, 2)).toBe(-3);
    });

    test('subtract 0 from a non zero number', () => {
      expect(calculator.sub(-2, 0)).toBe(-2);
    });

    test('subtract a non zero number from 0', () => {
      expect(calculator.sub(0, -2)).toBe(2);
    });

    test('0 - 0 => 0', () => {
      expect(calculator.sub(0, 0)).toBe(0);
    });
  });

  describe('multiplication', () => {
    test('multiplying two positive numbers', () => {
      expect(calculator.mult(3, 2)).toBe(6);
    });

    test('multiplying two negative numbers', () => {
      expect(calculator.mult(-4, -2)).toBe(8);
    });

    test('multiplying a negative and a positive number', () => {
      expect(calculator.mult(4, -2)).toBe(-8);
    });

    test('multiplying 0 and a non zero number', () => {
      expect(calculator.mult(-2, 0)).toBe(0);
    });

    test('multiplying 0 and a non zero number (reversed)', () => {
      expect(calculator.mult(0, -2)).toBe(0);
    });

    test('multiplying by 1', () => {
      expect(calculator.mult(1, -2)).toBe(-2);
    });

    test('0 * 0 => 0', () => {
      expect(calculator.mult(0, 0)).toBe(0);
    });
  });

  describe('division', () => {
    test('dividing two positive divisible numbers', () => {
      expect(calculator.div(6, 2)).toBe(3);
    });

    test('dividing two negative divisible numbers', () => {
      expect(calculator.div(-4, -2)).toBe(2);
    });

    test('dividing a negative and a positive number', () => {
      expect(calculator.div(6, -2)).toBe(-3);
    });

    test('dividing two positive non divisible numbers', () => {
      expect(calculator.div(6, 4)).toBeCloseTo(1.5);
    });

    test('dividing two negative non divisible numbers', () => {
      expect(calculator.div(-10, -4)).toBeCloseTo(2.5);
    });

    test('dividing a negative and a positive number (non divisible)', () => {
      expect(calculator.div(6, -2)).toBe(-3);
    });

    test('dividing to an irrational number', () => {
      expect(calculator.div(1, Math.sqrt(2))).toBeCloseTo(0.7071067811865475);
    });

    test('dividing by 0', () => {
      expect(() => calculator.div(-2, 0)).toThrow(
        'Division by 0 is not allowed!',
      );
    });

    test('dividing 0 by a non zero number', () => {
      expect(calculator.div(0, -2)).toBe(0);
    });

    test('dividing 0 by 0', () => {
      expect(() => calculator.div(0, 0)).toThrow(
        'Division by 0 is not allowed!',
      );
    });

    test('dividing by 1', () => {
      expect(calculator.div(-2, 1)).toBe(-2);
    });
  });
});
