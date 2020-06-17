import { isNumber } from './number';

export const formatPercentage = value => {
  if (isNumber(value)) {
    const number = value.toFixed(2).split('.');
    number[0] = number[0].split(/(?=(?:-...)*$)/).join('.');
    return `${number.join(',')} %`;
  }

  return '0 %';
};
