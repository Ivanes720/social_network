import React from "react";
import Paginator from "../common/preloader/Paginator/Paginator";
import User from "./User"
let Users = ({...props}) => {

  return (
    <div>
      <Paginator {...props} currentPage={props.currentPage}  selectedPage={props.selectedPage} onPageChanged={props.onPageChanged}/>
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
