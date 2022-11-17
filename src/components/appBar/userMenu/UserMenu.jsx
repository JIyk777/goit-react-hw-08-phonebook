import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>Name</p>
      <button type="button" onClick={handleExit}>
        Exit
      </button>
    </div>
  );
};
