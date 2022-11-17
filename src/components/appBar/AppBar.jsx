import { useSelector } from 'react-redux';
import { getAuthLogin } from 'redux/auth/authSelector';
import { AuthNav } from './authNav/AuthNav';
import { UserMenu } from './userMenu/UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(getAuthLogin);
  return isLoggedIn === false ? <AuthNav></AuthNav> : <UserMenu></UserMenu>;
};
