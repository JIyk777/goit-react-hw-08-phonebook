import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getAuthName } from 'redux/auth/authSelector';

export const UserMenu = () => {
  const name = useSelector(getAuthName);
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>{name}</p>
      <button type="button" onClick={handleExit}>
        Exit
      </button>
    </div>
  );
};
