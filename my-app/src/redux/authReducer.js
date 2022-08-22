import { authApi, securityApi } from "../API/api";
const SET_USER_DATA = "my-app/auth/SET_USER_DATA";
const SET_CAPTCHA = "my-app/auth/SET_CAPTCHA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case SET_CAPTCHA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});
const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: SET_CAPTCHA,
  payload: { captchaUrl },
});
export const getAuthUserData = (id, login, email) => {
  return async (dispacth) => {
    let response = await authApi.me(id, login, email);
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispacth(setAuthUserData(id, email, login, true));
    }
  };
};

export const login =
  (values, setStatus, setFieldValue, setSubmitting) => async (dispatch) => {
    let response = await authApi.login(values);
    let resultCode = response.data.resultCode;
    if (resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let textError = `resultCode: ${resultCode} - another mistake`;
      if (response.data.messages && response.data.messages.length) {
        textError = `resultCode: ${resultCode} - ${response.data.messages.join()}`;
      }
      if (resultCode === 10) {
        dispatch(getCaptchaUrl());
        textError = `enter symbols from the picture`;
      }
       setStatus( textError );
       setSubmitting( false );
    }
  };

export const logout = () => async (dispatch) => {
  let response = await authApi.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityApi.getCaptchaApi();

  const captchaUrl = response.data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
};
export default authReducer;
