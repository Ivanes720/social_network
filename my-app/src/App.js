import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from "../src/components/Login/Login"
import { Route,  Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
      <Routes>
        <Route
          path="/dialogs"
          to={() => <DialogsContainer store={props.store} />}
        />
        <Route path="/profile/:userId?" to={() => <ProfileContainer />} />

        <Route path="/users" to={() => <UsersContainer />} />
        <Route path="/login" to={() => <Login/>} />

        <Route path="/news" to={News} />
        <Route path="/music" element={Music} />
        <Route path="/Settings" element={Settings} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
