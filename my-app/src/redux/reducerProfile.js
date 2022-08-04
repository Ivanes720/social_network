import { profileAPI, usersApi } from "../API/api";
const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postData: [
    { id: 1, message: "Hi, how  are you?", likesCount: 0 },
    { id: 2, message: "It's my first post", likesCount: 11 },
  ],
  newPostText: "React-message",
  profile: null,
  status: "",
};
const reducerProfile = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: "",
      };
    }
   
    case SET_STATUS: {
      return {
          ...state,
          status: action.status
      }
  }

    case SET_USERS_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreate = (newPostText) => ({
  type: ADD_POST, 
  newPostText
});
export const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getUsersProfile = (userId) => {
  return (dispatch) => {
    usersApi.getProfile(userId).then((response) => {
      dispatch(setUsersProfile(response.data));
    });
  };
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
      .then(response => {
          dispatch(setStatus(response.data));
          
      });
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
      .then(response => {
          if (response.data.resultCode === 0) {
              dispatch(setStatus(status));
          }
      });
}
export default reducerProfile;
