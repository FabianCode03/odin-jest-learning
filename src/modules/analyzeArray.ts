export interface NumberArrayFacts {
  average: number;
  min: number;
  max: number;
  length: number;
}

export default function analyzeArray(numbers: number[]): NumberArrayFacts {
  const length = numbers.length;

  if (length === 0) {
    return {
      average: NaN,
      min: NaN,
      max: NaN,
      length: 0,
    };
  }

  const total = numbers.reduce((sum, currentValue) => sum + currentValue, 0);
  const average = total / length;

  const min = numbers.reduce(
    (minimum, currentValue) => Math.min(minimum, currentValue),
    numbers[0],
  );
  const max = numbers.reduce(
    (maximum, currentValue) => Math.max(maximum, currentValue),
    numbers[0],
  );

  return { average, min, max, length };
}
