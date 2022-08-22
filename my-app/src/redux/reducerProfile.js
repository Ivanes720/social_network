import { profileAPI, usersApi } from "../API/api";
const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCES= "SAVE PHOTO_SUCCES";

let initialState = {
  postData: [
    { id: 1, message: "Hi, how  are you?", likesCount: 0 },
    { id: 2, message: "It's my first post", likesCount: 11 },
  ],
  newPostText: "Write-message",
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
    case DELETE_POST:
      return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
      case SAVE_PHOTO_SUCCES:
        return {...state, profile: { ...state.profile, photos: action.photos}}
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
export const savePhotoSucces = (photos) => ({type: SAVE_PHOTO_SUCCES, photos})

export const getUsersProfile = (userId) => {
  return async (dispatch) => {
   let response = await  usersApi.getProfile(userId)
      dispatch(setUsersProfile(response.data));
    };
  };


export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
                dispatch(setStatus(response.data));
                };


export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
      
          if (response.data.resultCode === 0) {
              dispatch(setStatus(status));
          }
      };
      export const savePhoto = (photos) => async (dispatch) => {
        let response = await profileAPI.savePhoto(photos)
            
                if (response.data.resultCode === 0) {
                    dispatch(savePhotoSucces(response.data.data.photos));
                }
            };


      export const saveProfile = (formData, setStatus, setSubmitting, goToViewMode) => async (dispatch, getState) => {

        const response = await profileAPI.saveProfile( formData );
     
        let resultCode = response.data.resultCode;
     
        if (resultCode === 0) {
           const userId = getState().auth.id;
           goToViewMode();
           dispatch( getUsersProfile( userId ) );
        }else {
     
           let textError = `resultCode: ${resultCode} - ${response.data.messages.join(', ')}`;
           setStatus( textError );
           setSubmitting( false );
        }
     
     };
     
export default reducerProfile;
