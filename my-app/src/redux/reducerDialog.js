const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};
const reducerDialog = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messageData: [...state.messageData, { message: body, id: "6" }],
      };

    default:
      return state;
  }
};
export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default reducerDialog;
