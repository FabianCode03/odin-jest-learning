export interface NumberArrayFacts {
  average: number;
  min: number;
  max: number;
  length: number;
}

export default function analyzeArray(numbers: number[]): NumberArrayFacts {
  const total = numbers.reduce((sum, currentValue) => {
    return sum + currentValue;
  }, 0);

  const length = numbers.length;

  const average = total / length;

  const min =
    numbers.length === 0
      ? NaN
      : numbers.reduce((minimum, currentValue) => {
          if (currentValue < minimum) {
            minimum = currentValue;
          }
          return minimum;
        }, numbers[0]);

  const max =
    length === 0
      ? NaN
      : numbers.reduce((maximum, currentValue) => {
          if (currentValue > maximum) {
            maximum = currentValue;
          }
          return maximum;
        });

  return { average, length, max, min };
}
