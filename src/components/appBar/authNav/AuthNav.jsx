import { AuthNavLinkStyle, AuthNavBoxStyle } from './AuthNavStyle';

export const AuthNav = () => {
  return (
    <AuthNavBoxStyle>
      <AuthNavLinkStyle to="/register">Register</AuthNavLinkStyle>
      <AuthNavLinkStyle to="/login">LogIn</AuthNavLinkStyle>
    </AuthNavBoxStyle>
  );
};
