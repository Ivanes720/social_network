import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/reducerDialog";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

     sendMessage: (body) => {
      dispatch(sendMessageCreator(body));
    },
    
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    
   
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;


