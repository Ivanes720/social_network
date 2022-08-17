import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from './../../common/preloader/Preloader';
import ProfileStatus from "./ProfileStatus"
import userPhoro from "../../../assetc/img/download.png"
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
const onMainPhotoSelecct=(e)=>{
if (e.target.files.length) {
props.savePhoto(e.target.files[0])
}
}
    return (
        <div>
                     <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoro} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelecct}></input>}
            </div>
        </div>
    )
}

export default ProfileInfo;