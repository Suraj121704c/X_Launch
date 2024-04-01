// user defined imports
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  validAllFields,
} from '.';
import {registerData} from './types';

export const registerValidation = (data: registerData) => {
  const {name, email, password} = data;
  const errors: any = {};

  if (!validAllFields(data)) {
    errors.allFields = 'Required all fields!!!';
  }

  if (name.trim() === '') {
    errors.name = 'Required First Name';
  } else if (!nameValidation(name)) {
    errors.name = 'Invalid Name';
  }

  if (email.trim() === '') {
    errors.email = 'Required email';
  } else if (!emailValidation(email)) {
    errors.email = 'Invalid Email';
  }

  const passwordResult = passwordValidation(password);
  if (passwordResult !== true) {
    errors.password = 'Password Invalid';
  }

  return Object.keys(errors).length === 0 ? true : errors;
};
