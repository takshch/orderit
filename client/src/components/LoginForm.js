import React, { useEffect, useState } from 'react';
import { useInputField } from '../hooks/use-input-field';
import './LoginForm.scss';

function LoginForm({ onLogin, isLoading, isError, error }) {
  const [onEmailInput, EmailField] = useInputField();
  const [onPasswordInput, PasswordField] = useInputField();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const valid = EmailField.isValid && PasswordField.isValid;
    setIsValid(valid);
  }, [EmailField, PasswordField]);

  return (
    <div className="login-form">
      <input
        type="email"
        placeholder="example@gmail.com"
        onInput={onEmailInput}
        disabled={isLoading}
      />
      <input
        type="password"
        placeholder="asd#13(^$"
        onInput={onPasswordInput}
        disabled={isLoading}
      />
      <input
        type="submit"
        value="Login"
        disabled={isLoading || !isValid}
        onClick={() => onLogin({ EmailField, PasswordField })}
      />
      {isError && (<div className="error">{error}</div>)}
    </div>
  );
}

export default LoginForm;
