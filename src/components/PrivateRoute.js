import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthLogin } from 'redux/auth/authSelector';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(getAuthLogin);

  return isLoggedIn === true ? Component : <Navigate to={redirectTo} />;
};
