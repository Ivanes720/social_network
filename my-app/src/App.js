import React, {Component} from 'react';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from "../src/components/Login/Login";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Preloader from "./components/common/preloader/Preloader";
import {initializeApp} from "../src/redux/appReducer";
import {connect} from "react-redux";

class App extends Component  {
  componentDidMount() {
    this.props.initializeApp();
} 
render (props)  {
  if (!this.props.initialized) {
    return <Preloader/>
}
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs"
            element={<DialogsContainer />}
          ></Route>
          <Route path="/profile/:userId" element={<ProfileContainer />}></Route>
          <Route path="/profile" element={<ProfileContainer />}></Route>

          <Route path="/users" element={<UsersContainer />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/news" element={<News />}></Route>
          <Route path="/music" element={<Music />}></Route>
          <Route path="/Settings" element={<Settings />}></Route>
        </Routes>
      </div>
    </div>
  );}
};


let mapStateToProps = (state) => ({

  initialized: state.app.initialized

})


export default connect( mapStateToProps, {initializeApp} )( App );