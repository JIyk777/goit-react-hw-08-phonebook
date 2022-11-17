import { LoginFormStyle, LoginFormLabelStyle } from './LoginFormStyle';

export const LoginForm = () => {
  return (
    <LoginFormStyle>
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
