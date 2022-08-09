import { combineReducers, createStore, applyMiddleware } from "redux";
import reducerDialog from "../redux/reducerDialog";
import reducerProfile from "../redux/reducerProfile";
import reducerUsers from "./reducerUsers";
import authReducer from "./authReducer";
import appReducer from "./appReducer";

import thunk from 'redux-thunk';
//import { Formik } from 'formik';
//import reducerSideBar from "./reducerSidebar";

let reducers= combineReducers({
    profilePage: reducerProfile,
    dialogsPage: reducerDialog, 
    usersPage: reducerUsers,
    auth: authReducer,
    app: appReducer

});
let store =createStore (reducers, applyMiddleware(thunk));
 window.store=store;
export default store;