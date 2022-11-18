import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getAuthName } from 'redux/auth/authSelector';
import { UserMenuBtn, UserMenuBox } from './UserMenuStyle';

export const UserMenu = () => {
  const name = useSelector(getAuthName);
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(logOut());
  };
  return (
    <UserMenuBox>
      <span>{name}</span>
      <UserMenuBtn type="button" onClick={handleExit}>
        Exit
      </UserMenuBtn>
    </UserMenuBox>
  );
};
