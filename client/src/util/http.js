import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
if (!API_BASE_URL) {
  throw new Error('API_BASE_URL env variable required');
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export default axiosInstance;
