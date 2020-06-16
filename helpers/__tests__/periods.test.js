import {
  PERIODS,
  FROM_THE_BEGINNING,
  LAST_MONTH,
  THREE_MONTH,
  SIX_MONTH,
  ONE_YEAR,
  TWO_YEAR
} from '../periods';

describe('Periods', () => {
  test('should return default values', () => {
    expect(PERIODS).toEqual({
      '0': 'desde o início',
      '1': 'último mês',
      '12': '1 ano',
      '24': '2 anos',
      '3': '3 meses',
      '6': '6 meses'
    });
    expect(FROM_THE_BEGINNING).toBe(0);
    expect(LAST_MONTH).toBe(1);
    expect(THREE_MONTH).toBe(3);
    expect(SIX_MONTH).toBe(6);
    expect(ONE_YEAR).toBe(12);
    expect(TWO_YEAR).toBe(24);
  });
});
