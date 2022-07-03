import { default as axios } from '../util/http';

const ORDER_QUOTE = '/order/quote';

export const getQuoteByQuantities = async (productQuantities) => {
  const response = await axios.post(ORDER_QUOTE, {
    products: productQuantities
  });
  return response.data;
};
