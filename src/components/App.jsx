import { AppBar } from './AppBar';
import { Box } from 'components/box/Box';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { getAuthRefresh } from 'redux/auth/authSelector';

const RegisterForm = lazy(() => import('./registerForm/RegisterForm'));
const Phonebook = lazy(() => import('./Phonebook'));
const LoginForm = lazy(() => import('./logInForm/LoginForm'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getAuthRefresh);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="300px"
      ml="auto"
      mr="auto"
      mt={5}
      p={3}
      bg="#F0E68C"
      boxShadow="0px 0px 40px 0px #9AA0AD"
    >
      <AppBar></AppBar>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterForm />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginForm />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
          />
        </Routes>
      </Suspense>
    </Box>
  );
};
