import { isNumber } from '../number';

describe('Number', () => {
  test('should return false when NaN', () => {
    expect(isNumber('testing string')).toBe(false);
    expect(isNumber(0)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
  });

  test('should return true when number', () => {
    expect(isNumber(200)).toBe(true);
    expect(isNumber(-200)).toBe(true);
  });
});
