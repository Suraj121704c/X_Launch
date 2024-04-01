import {emailValidation, passwordValidation, validAllFields} from '.';
import {LoginData} from './types';

export const loginValidation = (data: LoginData) => {
  const {email, password} = data;
  const errors: any = {};

  if (!validAllFields(data)) {
    errors.allFields = 'Required all fields!!!';
  }
  if (!emailValidation(email)) {
    errors.email = 'Please enter a valid email';
  }
  const passwordResult = passwordValidation(password);
  if (passwordResult !== true) {
    errors.password = passwordResult.toString();
  }

  return Object.keys(errors).length === 0 ? true : errors;
};
