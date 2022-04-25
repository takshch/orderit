const { assign } = Object;

export const normalizeResponse = (data) => {
  const { price } = data;
  const priceText = `Rs.${price}`;

  return assign({}, data, { priceText });
};
