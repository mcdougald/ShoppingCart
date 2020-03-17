import * as types from './types';

export const userLoggedIn = (token, user) => ({
  type: types.LOGIN,
  payload: {
    token,
    user: user
  }
});

export const userLoginFail = () => ({
  type: types.LOGIN_FAIL
});

export const userLoggedOut = () => ({
  type: types.LOG_OUT,
});

export const login = (user) => dispatch => {
  try {
    dispatch( userLoggedIn('TEST_JWT_ACCESS_TOKEN', user) )
  } catch {
      dispatch(userLoginFail());
      console.error('Error logging in');
  }
};
  // fetch(POST, `/${user}/auth/login`, data)
  //   .then(({ data: { access_token } }) => {
  //     localStorage.jwt_token = access_token;
  //     dispatch(userLoggedIn(access_token));
  //     dispatch(getUserData());
  //     localStorage.removeItem("user_email");
  //   })
  //   .catch(error => {
  //     dispatch(userLogInFail());
  //
  //     console.error(error);
  //   });

export const logout = () => dispatch => {
  localStorage.removeItem("jwt_token");
  localStorage.removeItem("lastProfileStep");
  localStorage.removeItem("username");
  dispatch(userLoggedOut());
  // history.push("/sign_in");
};
