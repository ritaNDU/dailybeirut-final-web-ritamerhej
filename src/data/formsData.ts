import {InitialSigninFormType, InitialSignupFormType} from './formsData.types';

export const initialSignupFormValues: InitialSignupFormType = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

export const initialSigninFormValues: InitialSigninFormType = {
  email: '',
  password: '',
};
