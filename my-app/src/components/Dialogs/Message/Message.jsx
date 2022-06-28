import React from "react";
import classes from './../Dialogs';



const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
};

export default Message;