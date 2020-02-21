export const validateRegisterForm = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Select a username'
  } else if (values.username ? values.username.length > 20 : false) {
    errors.username = "Your username cannot exceed 20 characters";
  }

  if (!values.password) {
  errors.password = "Select a password";
  } else if (values.password ? values.password.length < 8 : false) {
    errors.password = "Password must be 8 characters or more";
  }

  if (!values.retype_password) {
  errors.retype_password = "Confirm password";
  } else if (values.password !== values.retype_password) {
    errors.retype_password = "Passwords do not match.";
  }

  return errors;
};
