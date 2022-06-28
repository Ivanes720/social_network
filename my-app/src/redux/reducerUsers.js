const UPDATE_NEW_POST="UPDATE-NEW-POST";
 const ADD_POST="ADD-POST";

 let initialState={
  Users: [
    { id: 1, fullName: "sadsas", status: "single", location:{city: "Krakow", country: "Poland"} },
    { id: 1, fullName: "sadsas", status: "single", location:{city: "Krakow", country: "Poland"} },
    { id: 1, fullName: "sadsas", status: "single", location:{city: "Krakow", country: "Poland"} },
 
  ],
  newPostText: "react-message"
};
const reducerUsers=(state=initialState, action)=>{

          default:
            return state;
      
      
};  

export const  addPostActionCreate=()=>({
    type: ADD_POST 
});
export const  updateNewPostActionCreate=(text)=>({
    type: UPDATE_NEW_POST,
    newText: text
   });
export default reducerUsers;