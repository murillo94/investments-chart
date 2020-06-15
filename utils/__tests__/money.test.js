import { parseMoney, formatMoney, roundMoney } from '../money';

describe('Money', () => {
  const stringMoney = 'testing string';
  const nullMoney = null;
  const undefinedMoney = undefined;

  describe('parseMoney', () => {
    test('should return 0 when NaN', () => {
      expect(parseMoney(stringMoney)).toBe(0);
      expect(parseMoney(nullMoney)).toBe(0);
      expect(parseMoney(undefinedMoney)).toBe(0);
    });

    test('should return parse fixed to 2 value when number has parsed initial format', () => {
      const positiveMoney = 24963.28;
      const negativeMoney = -24963.28;

      expect(parseMoney(positiveMoney)).toBe('24963.28');
      expect(parseMoney(negativeMoney)).toBe('-24963.28');
    });

    test('should return parse fixed to 2 value when number has no parsed initial format', () => {
      const positiveMoney = 24960;
      const negativeMoney = -24960;

      expect(parseMoney(positiveMoney)).toBe('24960.00');
      expect(parseMoney(negativeMoney)).toBe('-24960.00');
    });
  });

  describe('formatMoney', () => {
    test('should return 0 when NaN', () => {
      expect(formatMoney(stringMoney)).toBe('R$ 0,00');
      expect(formatMoney(nullMoney)).toBe('R$ 0,00');
      expect(formatMoney(undefinedMoney)).toBe('R$ 0,00');
    });

    test('should return formated value when number has parsed initial format', () => {
      const positiveMoney = 24963.28;
      const negativeMoney = -24963.28;

      expect(formatMoney(positiveMoney)).toBe('R$ 24.963,28');
      expect(formatMoney(negativeMoney)).toBe('R$ -24.963,28');
    });

    test('should return formated value when number has no parsed initial format', () => {
      const positiveMoney = 24960;
      const negativeMoney = -24960;

      expect(formatMoney(positiveMoney)).toBe('R$ 24.960,00');
      expect(formatMoney(negativeMoney)).toBe('R$ -24.960,00');
    });
  });

  describe('roundMoney', () => {
    test('should return 0 when NaN', () => {
      expect(roundMoney(stringMoney)).toBe(0);
      expect(roundMoney(nullMoney)).toBe(0);
      expect(roundMoney(undefinedMoney)).toBe(0);
    });

    test('should return without rounded', () => {
      const positiveMoney = 200;
      const negativeMoney = -200;

      expect(roundMoney(positiveMoney)).toBe('200');
      expect(roundMoney(negativeMoney)).toBe('-200');
    });

    test('should return with rounded to K', () => {
      const positiveMoney = 2000;
      const negativeMoney = -2000;

      expect(roundMoney(positiveMoney)).toBe('2 k');
      expect(roundMoney(negativeMoney)).toBe('-2 k');
    });

    test('should return with rounded to M', () => {
      const positiveMoney = 1000001;
      const negativeMoney = -1000001;

      expect(roundMoney(positiveMoney)).toBe('1 m');
      expect(roundMoney(negativeMoney)).toBe('-1 m');
    });

    test('should return with rounded to B', () => {
      const positiveMoney = 1000000000;
      const negativeMoney = -1000000000;

      expect(roundMoney(positiveMoney)).toBe('1 b');
      expect(roundMoney(negativeMoney)).toBe('-1 b');
    });
  });
});
