import axios from "axios";

const API = 'http://localhost:4000';
const PRODUCTS_API = `${API}/products`;

class ProductService {
  async loadAll() {
    const response = await axios.get(PRODUCTS_API);
    return response.data;
  }
}

const instance = new ProductService();
export default instance;
