import * as Yup from 'yup';
export const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  repeatPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});
