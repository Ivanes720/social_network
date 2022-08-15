import React from "react";
import classes from "../Users/users.module.css";
import userPhoto from "../../assetc/img/download.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/preloader/Paginator/Paginator";
import User from "./User"
let Users = ({...props}) => {

  return (
    <div>
      <Paginator {...props} currentPage={props.currentPage}  selectedPage={props.selectedPage} onPageChanged={props.onPageChanged}/>
{/*       <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && classes.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div> */}
      {
        props.users.map((user) => (
       <User
       user={user}
                                     followingInProgress={props.followingInProgress}
                                     key={user.id}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
       />
      ))}
    </div>
  );
};

export default Users;
