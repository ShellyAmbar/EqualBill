const getUserData = async () => {};

const updateUserData = async () => {};

import { getAuth } from 'firebase/auth';

const validatePhoneNumber = (phone: string): boolean => {
  var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
  return regexp.test(phone);
};
const login = async (phone: string) => {
  const auth = getAuth();
  auth.languageCode = 'it';
  // To apply the default browser preference instead of explicitly setting it.
  // auth.useDeviceLanguage();

  if (validatePhoneNumber(phone)) {
  } else {
    alert('Invalid Phone Number');
  }
};

export { getUserData, updateUserData, login };
