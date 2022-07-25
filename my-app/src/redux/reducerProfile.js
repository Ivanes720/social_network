 import { usersApi } from "../API/api";
 const UPDATE_NEW_POST="UPDATE-NEW-POST";
 const ADD_POST="ADD-POST";
 const SET_USERS_PROFILE="SET_USERS_PROFILE";

 let initialState={
  postData: [
    { id: 1, message: "Hi, how  are you?", likesCount: 0 },
    { id: 2, message: "It's my first post", likesCount: 11 }],
  newPostText: "react-message",
  profile: null
};
const reducerProfile=(state=initialState, action)=>{
    switch (action.type) {
      case ADD_POST:{
        let newPost = {
          id: 5,
          message: state.newPostText,
          likesCount: 0
        };
      
        return {...state,
        postData: [...state.postData, newPost],
                newPostText: ""};
      }
      case  UPDATE_NEW_POST:  {

          return {...state,
                    newPostText: action.newText};
      }
      case  SET_USERS_PROFILE:  {

          return {...state,
            profile: action.profile};
      }
          default:
            return state;
      
      }
};  

export const  addPostActionCreate=()=>({
    type: ADD_POST 
});
export const  updateNewPostActionCreate=(text)=>({
    type: UPDATE_NEW_POST,
    newText: text
   });
export const  setUsersProfile=(profile)=>({
    type: SET_USERS_PROFILE,
   profile 
   });
   export const getUsersProfile =(userId)=>{
    return (dispatch)=>{
      usersApi.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data));
    });
    }
   }
export default reducerProfile;