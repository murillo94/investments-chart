import { isNumber } from './number';

export const formatDate = timestamp => {
  if (isNumber(timestamp)) {
    const unixTimestamp = new Date(timestamp);
    const months = [
      'Jan',
      'Fev',
      'Mar',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez'
    ];
    const year = unixTimestamp.getFullYear();
    const month = months[unixTimestamp.getMonth()];
    const date = unixTimestamp.getDate();

    return `${date} ${month} ${year}`;
  }

  return 'Sem data';
};
