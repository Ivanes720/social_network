import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogData.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messageData.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <AddMessageForm sendMessage={props.sendMessage} />{" "}
    </div>
  );
};

export default Dialogs;
