import { formatDate } from '../date';

describe('Date', () => {
  test('should return default message when not date', () => {
    expect(formatDate('testing string')).toBe('Sem data');
    expect(formatDate(null)).toBe('Sem data');
    expect(formatDate(undefined)).toBe('Sem data');
  });

  test('should return date', () => {
    expect(formatDate(1565308800000)).toBe('8 Ago 2019');
  });
});
