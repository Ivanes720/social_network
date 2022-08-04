import React from "react";
import classes from './ErrorMessage.module.css';

export const validateEmailField = values => {

   const errors = {};
   if (!values.email) {
      errors.email = 'Required 1';
   } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email )
   ) {
      errors.email = 'Invalid email address';
   }
   return errors;
   
};


export  const ErrorMessageWrapper = (msg) => {

   return (
      <div >
         <span className={classes.validationErrorMessage}>
            {msg}
         </span>
      </div>
   )
}

