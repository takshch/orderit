import { default as axios } from '../util/http';

const PRODUCTS_ROUTE = (shopId) => `/sellers/${shopId}/products`;
const PRODUCT_ROUTE = (productId) => `/products/${productId}`;

const loadAllByShopId = async (shopId) => {
  const path = PRODUCTS_ROUTE(shopId);
  const response = await axios.get(path);
  return response.data;
};

const loadById = async (productId) => {
  const path = PRODUCT_ROUTE(productId);
  const response = await axios.get(path);
  return response.data;
};

const ProductService = {
  loadAllByShopId,
  loadById
};

export default ProductService;
