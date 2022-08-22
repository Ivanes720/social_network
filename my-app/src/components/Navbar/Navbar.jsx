import React from 'react';
 import classes from './Navbar.module.css';
 import {NavLink} from "react-router-dom"
const Navbar =()=>{

    return  (
        <nav className={classes.nav}>
        <div className={classes.item}>
         <NavLink to="/profile" className={classes.activeLink}> Profile</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink  to="/dialogs" className={classes.activeLink}> Message</NavLink >
        </div>
        <div className={classes.item}>
          <NavLink to="/news" className={classes.activeLink}> News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/music" className={classes.activeLink}> Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/settings" className={classes.activeLink}> Settings</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/users" className={classes.activeLink}>Users</NavLink>
        </div>

      </nav>
    )
}
export default Navbar;