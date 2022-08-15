import reducerProfile, {addPostActionCreate } from './reducerProfile';
import { React } from 'react';
import ReactDOM from "react-dom";

let state = {
  postData: [
    { id: 1, message: "Hi, how  are you?", likesCount: 0 },
    { id: 2, message: "It's my first post", likesCount: 11 },
  ]
};
it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreate("test");

  // 2. action
  let newState = reducerProfile(state, action);

  // 3. expectation
  expect(newState.postData.length).toBe(5);

});
