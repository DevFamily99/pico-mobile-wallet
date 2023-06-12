import {useUserInfo} from '../context/UserInfoContext';
import {User} from '../types';

export default function useAuth() {
  const {setName} = useUserInfo();

  const signIn = (user: User) => {
    setName(user.name);
  };
  const signOut = () => {
    setName(undefined);
  };

  return {
    signIn,
    signOut,
  };
}
