import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from './../../common/preloader/Preloader';
const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader/>
  }
  return (
    <div className={classes.descriptionBlock}>
      <img
src="https://cdn.lifegate.it/x7Kzp_oKga5j7myhJv1NiviLG1g=/933x/smart/https://www.lifegate.com/app/uploads/mare-fa-bene-2.jpg"></img>
      <div>
        <img src={props.profile.photos.small}/>
      </div>
    </div>
  );
};
export default ProfileInfo;
