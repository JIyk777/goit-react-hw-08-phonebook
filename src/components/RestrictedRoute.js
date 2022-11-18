import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthLogin } from 'redux/auth/authSelector';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getAuthLogin);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
