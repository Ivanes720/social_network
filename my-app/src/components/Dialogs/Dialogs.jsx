import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
 
let state=props.dialogsPage;
  let dialogsElements = state.dialogData.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  );
  let messagesElements = state.messageData.map( m => <Message message={m.message} id={m.id} key={m.id}/> );
  let newMessageBody = state.newMessageBody;




  let onSendMessageClick = () =>  {
    props.sendMessage(newMessageBody);
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
      {dialogsElements}
      </div>
      <div className={classes.messages}>
      {messagesElements}
      </div>
      <div>
        <textarea
          value={newMessageBody}
          onChange={onNewMessageChange}
          placeholder="enter your message"
        ></textarea>
      </div>
      <div>
        <button onClick={onSendMessageClick}> send</button>
      </div>
    </div>
  );
};

export default Dialogs;
