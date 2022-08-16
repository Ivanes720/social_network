import React, { Component, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Preloader from "./components/common/preloader/Preloader";
import { initializeApp } from "../src/redux/appReducer";
import { connect } from "react-redux";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const Login = React.lazy(() => import("../src/components/Login/Login"));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
            <Routes>
              <Route path="/dialogs" element={<DialogsContainer />}></Route>
              <Route
                path="/profile/:userId"
                element={<ProfileContainer />}
              ></Route>
              <Route path="/profile" element={<ProfileContainer />}></Route>

              <Route path="/users" element={<UsersContainer />}></Route>
              <Route
                path="/login"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Login />
                  </Suspense>
                }
              ></Route>
              <Route path="/news" element={<News />}></Route>
              <Route path="/music" element={<Music />}></Route>
              <Route path="/Settings" element={<Settings />}></Route>
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
