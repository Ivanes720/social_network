/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Users/users.module.css";
import userPhoto from "../../assetc/img/download.png";
let User = ({user, followingInProgress, unfollow, follow}) => {

  return (
       
        <div>
          <span>
          <div>
          <NavLink to={`/profile/${user.id}`}>
                <img alt="description of image"
                  src={user.photos.small != null ? user.photos.small : userPhoto}
                  className={classes.userPhoto}
                />
              </NavLink>
                    </div>
            <div>
              {user.followed ? (
                <button
                  disabled={followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    unfollow(user.id)
                  }}
                >
                  Unfollow 
                </button>
              ) : (
                <button
                  disabled={followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    follow(user.id)

                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>
     
 
  );
};

export default User;
