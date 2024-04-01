export const passwordValidation = (password: string) => {
  const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/;
  if (password.trim() === '') return '*Required Password';
  const hasSpaces = /\s/.test(password);
  if (hasSpaces) {
    return 'Invalid password';
  }
  if (!passwordRegex.test(password)) {
    return 'Please enter a strong password';
  }
  return true;
};

export const emailValidation = (email: string) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email.trim());
};

export const nameValidation = (firstName: string) => {
  const pattern = /[a-zA-Z]{2,40}[a-zA-Z]{2,40}$/;
  return pattern.test(firstName.trim());
};

export const validAllFields = (props: object) => {
  const valid = Object.values(props).every(
    value =>
      (typeof value === 'string' && value.trim() !== '') ||
      typeof value === 'boolean',
  );
  return valid;
};
