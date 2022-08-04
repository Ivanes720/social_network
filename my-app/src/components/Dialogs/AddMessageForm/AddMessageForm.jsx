import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import {ErrorMessageWrapper}  from '../../utils/validators/validators'

const AddMessageForm = (props) => {

    const ValidationSchema = Yup.object().shape({
        newMessageBody: Yup.string()
          .min(3, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
              });


  let addNewMessage = (values) => {
    props.sendMessage(values);
  };
  return (
    <div>
      <Formik
        initialValues={{
          newMessageBody: "",
        }}
        onSubmit={(values) => {
          addNewMessage(values.newMessageBody);
        }}
        validationSchema={ValidationSchema}
      >
        {() => (
          <Form>
            <div>
              <Field
                name={"newMessageBody"}
                as={"textarea"}
                placeholder={"enter text"}
              />
            </div>
            <ErrorMessage name="newMessageBody">
                  {ErrorMessageWrapper}
               </ErrorMessage>
            <button type={"submit"}>Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default AddMessageForm;
