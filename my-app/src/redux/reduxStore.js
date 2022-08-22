import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import reducerDialog from "../redux/reducerDialog";
import reducerProfile from "../redux/reducerProfile";
import reducerUsers from "./reducerUsers";
import authReducer from "./reducerAuth";
import appReducer from "./reducerApp";
import thunkMiddleware from "redux-thunk";
//import { Formik } from 'formik';
//import reducerSideBar from "./reducerSidebar";

let reducers= combineReducers({
    profilePage: reducerProfile,
    dialogsPage: reducerDialog, 
    usersPage: reducerUsers,
    auth: authReducer,
    app: appReducer

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
 window.store=store;
export default store; 