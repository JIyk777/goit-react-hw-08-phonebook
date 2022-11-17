import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { getAuthLogin } from 'redux/auth/authSelector';

export default function PrivateRoute({ children }, ...routeProps) {
  return <Route {...routeProps}>{children}</Route>;
}
