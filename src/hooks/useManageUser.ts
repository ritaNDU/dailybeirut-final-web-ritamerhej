import {useAppDispatch, useAppSelector} from '../store/hooks';
import {add, remove} from '../store/userSlice';

const useManageUser = () => {
  const isUserSignedIn = useAppSelector(state => state.user.isSignedIn);
  const dispatch = useAppDispatch();

  const signUserIn = () => {
    dispatch(add());
  };
  const signUserOut = () => {
    dispatch(remove());
  };

  return {
    isUserSignedIn,
    signUserIn,
    signUserOut,
  };
};

export default useManageUser;
