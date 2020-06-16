export const formatData = (data, dateAgo = 0) =>
  [...data].reduce(
    (acc, item) => {
      if (dateAgo <= item.x) {
        acc.data = [...acc.data, item];
        acc.total += item.y;
      }
      return acc;
    },
    { data: [], total: 0 }
  );
