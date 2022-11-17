import { RegisterFormStyle, RegisterFormLabelStyle } from './RegisterFormStyle';

export const RegisterForm = () => {
  return (
    <RegisterFormStyle>
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
