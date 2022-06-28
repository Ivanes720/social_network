import {
  addPostActionCreate,
  updateNewPostActionCreate,
} from "../../../redux/reducerProfile";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps =(state)=>{
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText

  };
}; 

const mapDispatchToProps =(dispatch)=>{
  return {
    updateNewPostText: (text)=>{
      let action = updateNewPostActionCreate(text);
      dispatch(action);
  },

    addPost: ()=>{
      dispatch(addPostActionCreate())
        }

       
  };
};

const MyPostsContainer= connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;


