const UPDATE_NEW_MESSAGE_BODY ="UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE ="SEND_MESSAGE";


let initialState={
  messageData: [
    { message: "Yo", id: "1" },
    { message: "sraka", id: "2" },
    { message: "azaza", id: "3" },
    { message: "hello", id: "4" },
  ],
  dialogData: [
    { name: "Ivan", id: "1" },
    { name: "Dima", id: "2" },
    { name: "Tymur", id: "3" },
    { name: "Sraka", id: "4" },
  ],
  newMessageBody: ""
};
const reducerDialog=(state=initialState, action)=>{
      switch  (action.type) {
       case UPDATE_NEW_MESSAGE_BODY: 

               return {
                ...state,
                newMessageBody: action.body
              };
       
           case SEND_MESSAGE:
             let body =state.newMessageBody;
                      return {
            ...state,
            newMessageBody: "",
            messageData:[...state.messageData, { message: body, id: "22"}]
           
          };
        
          default:
            return state;
};
};
export const  sendMessageCreator=()=>({
    type: SEND_MESSAGE
});
export const  updateNewMessageBodyCreator=(body)=>({
type: UPDATE_NEW_MESSAGE_BODY,
body: body
});




export default reducerDialog;