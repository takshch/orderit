import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { login } from '../reducers/user/authentication';
import './login.scss';

const onLogin = (dispatch) => ({ EmailField, PasswordField }) => {
  const data = { email: EmailField.value, password: PasswordField.value };
  dispatch(login(data));
};

function RouteLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, error, value: { isAuthenticated } } = useSelector((state) => state.user.authentication);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="route-login">
      <LoginForm
        onLogin={onLogin(dispatch)}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    </div>
  );
}

export default RouteLogin;
