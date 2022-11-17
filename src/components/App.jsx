import { AppBar } from './appBar/AppBar';
import { Box } from 'components/box/Box';
import { Phonebook } from './phonebook/Phonebook';
import { RegisterForm } from './phonebook/registerForm/RegisterForm';
import { StartPage } from './phonebook/startPage/StartPage';
import { LoginForm } from './phonebook/logInForm/LoginForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
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
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* <Route path="/contacts" element={<Phonebook />}></Route> */}
        <PrivateRoute path="/contacts">
          <Phonebook />
        </PrivateRoute>
      </Routes>
    </Box>
  );
};
