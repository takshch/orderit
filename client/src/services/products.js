import { default as axios } from '../util/http';

const PRODUCTS_ROUTE = '/products';

const loadAll = async () => {
  const response = await axios.get(PRODUCTS_ROUTE);
  return response.data;
};

const ProductService = {
  loadAll,
};


export default ProductService;
