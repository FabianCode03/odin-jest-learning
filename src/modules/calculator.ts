import isNegativeZero from './isNegativeZero';

interface Calculator {
  add: (a: number, b: number) => number;
  sub: (a: number, b: number) => number;
  mult: (a: number, b: number) => number;
  div: (a: number, b: number) => number | Error;
}

export default (function calculator(): Calculator {
  const add = (a: number, b: number): number => a + b;
  const sub = (a: number, b: number): number => a - b;
  const mult = (a: number, b: number): number =>
    isNegativeZero(a * b) ? 0 : a * b;
  const div = (a: number, b: number): number | Error => {
    if (b === 0) {
      throw new Error('Division by 0 is not allowed!');
    }

    return isNegativeZero(a / b) ? 0 : a / b;
  };
  return { add, sub, mult, div };
})();
