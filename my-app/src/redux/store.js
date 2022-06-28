import reducerProfile from   "../redux/reducerProfile";
import reducerDialog from "../redux/reducerDialog";
import reducerSideBar from "./reducerSidebar";


let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how  are you?", likesCount: 0 },
        { id: 2, message: "It's my first post", likesCount: 11 }],
      newPostText: "react-message"
    },
    dialogsPage: {
      messageData: [
        { message: "Yo", id: "1" },
        { message: "sraka", id: "2" },
        { message: "azaza", id: "3" },
        { message: "hello", id: "4" },
      ],
      dialogData: [
        { name: "Ivan", id: "1" },
        { name: "Dima", id: "2" },
        { name: "Tymur", id: "3" },
        { name: "Sraka", id: "4" },
      ],
      newMessageBody: ""
    },
    sideBar: {
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed")
  },

  subscribe(observer) {
    this._callSubscriber =  observer;
  },

  dispatch(action) {
  this._state.profilePage=reducerProfile(this._state.profilePage, action);
  this._state.dialogsPage=reducerDialog(this._state.dialogsPage, action);
  this._state.sideBar=reducerSideBar(this._state.sideBar, action);



  this._callSubscriber(this._state)  
  }
    }






export default store;
window.store = store;



