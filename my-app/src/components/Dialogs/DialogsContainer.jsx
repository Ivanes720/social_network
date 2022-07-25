import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/reducerDialog";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
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




export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
