import { isNumber } from './number';

export const parseMoney = (value, minimumFractionDigits = 2) =>
  isNumber(value) ? parseFloat(value).toFixed(minimumFractionDigits) : 0;

export const formatMoney = value => {
  if (isNumber(value)) {
    const number = value.toFixed(2).split('.');
    number[0] = `R$ ${number[0].split(/(?=(?:...)*$)/).join('.')}`;
    return number.join(',');
  }

  return 'R$ 0,00';
};

export const roundMoney = value => {
  if (isNumber(value)) {
    const abbrev = 'kmb';
    let base = Math.floor(Math.log(Math.abs(value)) / Math.log(1000));
    const prec = Math.pow(10, 2);
    const rouded = Math.round((value / Math.pow(1000, base)) * prec) / prec;
    const suffix = abbrev[Math.min(2, base - 1)];
    base = abbrev.indexOf(suffix) + 1;

    return suffix ? `${rouded} ${suffix}` : `${value}`;
  }

  return 0;
};
