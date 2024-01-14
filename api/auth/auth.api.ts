import { getAuth } from 'firebase/auth';

const login = async () => {
  const auth = getAuth();
};
const logout = async () => {
  const auth = getAuth();
  auth.signOut();
};

const signup = async () => {
  const auth = getAuth();
};

export { login, logout, signup };
