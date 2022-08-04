import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { Formik, Form, Field } from "formik";

const MyPosts = (props) => {

  let postsElements = props.postData
  .map(p => (
    <Post message={p.message} 
    likesCount={p.likesCount} 
    id={p.id} key={p.id}/>
  ));
  
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddPostForm  addPost={props.addPost}    />
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;

let  AddPostForm =(props)=>{

    let onAddPost = (values) => {
      props.addPost(values);
    };
    return (
      <div>
        <Formik
          initialValues={{
            newPostText: "",
          }}
          onSubmit={(values) => {
            onAddPost( values.newPostText );
                    } }
        >
          {() => (
            <Form>
              <div>
                <Field
                  name={"newPostText"}
                  type={"text"}
                  placeholder={"message"}
                />
              </div>
              <button type={"submit"}>Add post</button>
            </Form>
          )}
        </Formik>
      </div>
    )
          
          }