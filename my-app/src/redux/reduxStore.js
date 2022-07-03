import {createStore, combineReducers} from "redux";
import reducerDialog from "../redux/reducerDialog";
import reducerProfile from "../redux/reducerProfile";
import reducerUsers from "./reducerUsers";
//import reducerSideBar from "./reducerSidebar";

let reducers= combineReducers({
    profilePage: reducerProfile,
    dialogsPage: reducerDialog, 
    usersPage: reducerUsers,
    //sideBar: reducerSideBar, 

});
let store =createStore (reducers);
 
export default store;