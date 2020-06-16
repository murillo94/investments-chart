import { formatData } from '../api';

const data = [
  {
    x: 1565308800000,
    y: 24960
  },
  {
    x: 1565568000000,
    y: 24960
  },
  {
    x: 1565654400000,
    y: 24963.28
  },
  {
    x: 1565740800000,
    y: 24966.55
  }
];

describe('Api', () => {
  test('should return all data without date ago', () => {
    expect(formatData(data)).toEqual({
      data,
      total: 99849.83
    });
  });

  test('should return filtered list with date ago', () => {
    expect(formatData(data, 1565568000000)).toEqual({
      data: [data[1], data[2], data[3]],
      total: 74889.83
    });
  });
});
