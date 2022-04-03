const API = 'http://localhost:4000';
const PRODUCTS_API = `${API}/products`;

class ProductService {
  async loadAll() {
    const response = await fetch(PRODUCTS_API);
    const data = await response.json();
    return data;
  }
}

const instance = new ProductService();
export default instance;
