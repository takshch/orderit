import { default as axios } from '../util/http';

const PRODUCTS_ROUTE = (shopId) => `/sellers/${shopId}/products`;

const loadAllByShopId = async (shopId) => {
  const path = PRODUCTS_ROUTE(shopId);
  const response = await axios.get(path);
  return response.data;
};

const ProductService = {
  loadAllByShopId,
};

export default ProductService;
