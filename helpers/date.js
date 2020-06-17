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
    const year = unixTimestamp.getUTCFullYear();
    const month = months[unixTimestamp.getUTCMonth()];
    const date = unixTimestamp.getUTCDate();

    return `${date} ${month} ${year}`;
  }

  return 'Sem data';
};

export const getDateAgo = ago => {
  if (isNumber(ago)) {
    const date = new Date();

    const month = date.getUTCMonth();
    date.setMonth(date.getUTCMonth() - ago);

    if (date.getUTCMonth() === month) date.setDate(0);
    date.setHours(0, 0, 0);
    date.setMilliseconds(0);

    return ((date / 1000) | 0) * 1000;
  }

  return 0;
};
