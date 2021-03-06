import MockDate from 'mockdate';

import { formatDate, getDateAgo } from '../date';

describe('Date', () => {
  describe('formatDate', () => {
    test('should return default message when not date', () => {
      expect(formatDate('testing string')).toBe('Sem data');
      expect(formatDate(null)).toBe('Sem data');
      expect(formatDate(undefined)).toBe('Sem data');
    });

    test('should return date', () => {
      expect(formatDate(1565308800000)).toBe('9 Ago 2019');
    });
  });

  describe('getDateAgo', () => {
    test('should return default value when date is not number', () => {
      expect(getDateAgo('testing string')).toBe(0);
      expect(getDateAgo(null)).toBe(0);
      expect(getDateAgo(undefined)).toBe(0);
    });

    test('should return unix timestamp', () => {
      MockDate.set(new Date(Date.UTC(2018, 5, 27, 0, 0, 0)));

      expect(new Date(getDateAgo(1)).getUTCMonth()).toBe(4);
      expect(new Date(getDateAgo(3)).getUTCMonth()).toBe(2);
    });
  });
});
