import { formatMoney } from './money';
import { formatPercentage } from './percentage';

const formatValues = values => ({
  data: values.data,
  total: formatMoney(values.total),
  profit: formatMoney(values.profit),
  profitPercentage: formatPercentage(values.profitPercentage),
  profitStatus: Math.sign(values.profitPercentage) >= 0
});

export const formatData = (data, dateAgo = 0) => {
  const newData = [...data].filter(item => dateAgo <= item.x);
  const newDataLength = newData.length;
  let total = 0;
  let profit = 0;
  let profitPercentage = 0;

  if (newDataLength > 0) {
    total = newData[newDataLength - 1].y;
    profit = total - newData[0].y;
    profitPercentage = (profit / total) * 100;
  }

  return formatValues({
    data: newData,
    total,
    profit,
    profitPercentage
  });
};
