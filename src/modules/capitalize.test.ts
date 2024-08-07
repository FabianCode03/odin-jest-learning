import { capitalize } from './capitalize';

test('capitalized string stays the same', () => {
  const input = 'Fabian';
  const output = 'Fabian';
  expect(capitalize(input)).toEqual(output);
});

test('lowercase strings are capitalized', () => {
  const data = [
    { input: 'fabian', output: 'Fabian' },
    { input: 'helen', output: 'Helen' },
    { input: 'fiona', output: 'Fiona' },
  ];
  for (const str of data) {
    expect(capitalize(str.input)).toBe(str.output);
  }
});
