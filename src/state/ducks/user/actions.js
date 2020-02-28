import * as types from './types';

export const userLoggedIn = token => ({
  type: types.LOGIN,
  token
});

export const userLoginFail = () => ({
  type: types.LOGIN_FAIL
});

export const userLoggedOut = () => ({
  type: types.LOG_OUT,
});

export const login = (user, data) => dispatch => {
  dispatch
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
