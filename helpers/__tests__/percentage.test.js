import { formatPercentage } from '../percentage';

describe('Percentage', () => {
  describe('formatPercentage', () => {
    test('should return 0 when NaN', () => {
      expect(formatPercentage('testing string')).toBe('0 %');
      expect(formatPercentage(null)).toBe('0 %');
      expect(formatPercentage(undefined)).toBe('0 %');
    });

    test('should return parse fixed to 2 value when percentage has parsed initial format', () => {
      const positivePercentage = 100.28;
      const negativePercentage = -100.28;

      expect(formatPercentage(positivePercentage)).toBe('100,28 %');
      expect(formatPercentage(negativePercentage)).toBe('-100,28 %');
    });

    test('should return parse fixed to 2 value when percentage has no parsed initial format', () => {
      const positivePercentage = 100;
      const negativePercentage = -100;

      expect(formatPercentage(positivePercentage)).toBe('100,00 %');
      expect(formatPercentage(negativePercentage)).toBe('-100,00 %');
    });
  });
});
