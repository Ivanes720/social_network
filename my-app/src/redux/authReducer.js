import { authApi } from "../API/api";
const SET_USER_DATA = "my-app/auth/SET_USER_DATA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
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

export const authHeader = (id, login, email) => {
  return async (dispacth) => {
    let response = await authApi.me(id, login, email);
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispacth(setAuthUserData(id, email, login, true));
    }
  };
};

export const login =
  (email, password, rememberMe, setStatus, setFieldValue, setSubmitting) =>
  async (dispatch) => {
    let response = await authApi.login(email, password, rememberMe);
    let resultCode = response.data.resultCode;

    if (resultCode === 0) {
      dispatch(authHeader());
    } else {
      let textError = `resultCode: ${resultCode} - ${response.data.messages.join()}`;

      setStatus(textError);
      //setFieldValue("general", textError)
      setSubmitting(false);
    }
  };

export const logout = () => async (dispatch) => {
 let response= await  authApi.logout()
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };

export default authReducer;
