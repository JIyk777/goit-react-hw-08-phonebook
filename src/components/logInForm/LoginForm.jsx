import { LoginFormStyle, LoginFormLabelStyle } from './LoginFormStyle';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.elements.password.value = '';
    form.elements.email.value = '';
  };
  return (
    <LoginFormStyle onSubmit={handleSubmit}>
      <LoginFormLabelStyle>
        <span>Email</span>
        <input type="email" name="email" />
      </LoginFormLabelStyle>
      <LoginFormLabelStyle>
        <span>Password</span>
        <input type="password" name="password" />
      </LoginFormLabelStyle>
      <button type="submit">Submit</button>
    </LoginFormStyle>
  );
};
