const UPDATE_NEW_POST="UPDATE-NEW-POST";
 const ADD_POST="ADD-POST";

 let initialState={
  postData: [
    { id: 1, message: "Hi, how  are you?", likesCount: 0 },
    { id: 2, message: "It's my first post", likesCount: 11 }],
  newPostText: "react-message"
};
const reducerProfile=(state=initialState, action)=>{
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: 5,
          message: state.newPostText,
          likesCount: 0
        };
      
        return {...state,
        postData: [...state.postData, newPost],
                newPostText: ""};
      
      case  UPDATE_NEW_POST:  {

          return {...state,
                    newPostText: action.newText};
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
export default reducerProfile;