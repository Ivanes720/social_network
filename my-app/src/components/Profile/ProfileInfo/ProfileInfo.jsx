import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from './../../common/preloader/Preloader';
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
  if (!props.profile) {
      return <Preloader />
  }

  return (
      <div>
          <div>
          </div>
          <div className={classes.descriptionBlock}>
              <img src={props.profile.photos.small} />
              <ProfileStatus  status={"sdssd"}/>
                       </div>
      </div>
  )
}

export default ProfileInfo;
