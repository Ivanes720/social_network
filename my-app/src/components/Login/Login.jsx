import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";

const Login = () => {

   return (
      <div>
         <h2> Login </h2>

         <Formik
            initialValues={{
               email: "",
               password: "",
               rememberMe: false
            }}
            //validate={validateLoginForm}
            //validationSchema={validationSchemaLoginForm}
            onSubmit={(values) => {
               console.log( values )
            }}
         >
            {() => (
               <Form>
                  <div>
                     <Field
                        name={'email'}
                        type={'text'}
                        placeholder={'e-mail'} />
                  </div>
                  <ErrorMessage name="email" component="div" />

                  <div>
                     <Field
                        name={'password'}
                        type={'password'}
                        placeholder={'password'} />
                  </div>
                  <ErrorMessage name="password" component="div" />

                  <div>
                     <Field
                        type={'checkbox'}
                        name={'rememberMe'}
                        id='rememberMe' />
                     <label htmlFor={'rememberMe'}> remember me </label>
                  </div>

                  <button type={'submit'}>Login</button>
               </Form>
            )}
         </Formik>

         <div>
            ...
         </div>

      </div>
   )
}

export default Login;