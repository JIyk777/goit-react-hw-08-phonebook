import { RegisterFormStyle, RegisterFormLabelStyle } from './RegisterFormStyle';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.elements.password.value = '';
    form.elements.email.value = '';
    form.elements.name.value = '';
  };

  return (
    <RegisterFormStyle onSubmit={handleSubmit}>
      <RegisterFormLabelStyle>
        <span>Name</span>
        <input type="text" name="name" />
      </RegisterFormLabelStyle>
      <RegisterFormLabelStyle>
        <span>Email</span>
        <input type="email" name="email" />
      </RegisterFormLabelStyle>
      <RegisterFormLabelStyle>
        <span>Password</span>
        <input type="password" name="password" />
      </RegisterFormLabelStyle>
      <button type="submit">Submit</button>
    </RegisterFormStyle>
  );
};
