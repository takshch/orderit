import { default as axios } from '../util/http';

const LOGIN_ROUTE = '/session/login';

const login = async (data) => {
  const response = await axios.post(LOGIN_ROUTE, data);
  return response.data;
};

const AccountService = {
  login
};

export default AccountService;
