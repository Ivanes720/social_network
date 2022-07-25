import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img alt="" src="https://pl.wikipedia.org/wiki/Plik:React-icon.svg"></img>
      <div className={classes.loginBlock}>
      {props.isAuth ? props.logIn :  <NavLink to={"/login"}>login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
