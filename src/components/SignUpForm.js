import React from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';
// import axios from "axios";
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import "./SignUpForm.css"

const SignUpForm = ({ errors, touched, values, handleSubmit, status }) => {
    
    return (
      <div className="container-signup">
      <div className="form-cover">
<Form className = "form" >
  <h2 className = "loginTitle" > Sign Up </h2>         
<div className="create-account-header">Create your account by filling in the forms. </div>
            {/* Email input */}
            <label> <strong>Email</strong></label> 
          <Field className="input" type="text" name="email" placeholder="Jane@gmail.com" />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
            {/* Password input  */}
            <label> <strong>Create a Password</strong></label> 
          <Field className="input" type="password" name="password" placeholder="********" />
          {touched.password && errors.password && <p className="error">{errors.password}</p>}
  
              {/* Password Confirmation input  */}
              <label> <strong>Confirm Password</strong> </label> 
          <Field className="input" type="password" name="passwordConfirm" placeholder="********" />
          {touched.passwordConfirm && errors.passwordConfirm && <p className="error">{errors.passwordConfirm}</p>}


          <button type = "submit"
          className = "btnSignUp"> Join </button> 
           <p className="already-member"> Already a member? <Link to='/'> Sign in </Link></p >
          </Form>
          </div>
          </div>

    );
  };

  const FormikSignUpForm = withFormik({
    mapPropsToValues({ email, password, 
      passwordConfirm  
    }) {
      return {
        email: email || '',
        password: password || '',
        passwordConfirm: passwordConfirm|| '',
      }
    },
  
    validationSchema: Yup.object().shape({
      email: Yup
      .string().required("Email is required"),
      password: Yup
      .string().required("Password is required").min(6),
      passwordConfirm: Yup.string()
      .required("Please confirm password")
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
    }),
  
    handleSubmit(values, props, resetForm ) {
      console.log("sign up form values =", values);
      console.log("sign up form email value =", values.email);
      console.log("sign up form password value =", values.password);

      let submitValues = {
        "email": values.email,
        "password": values.password
      }


      axiosWithAuth()
      .post(`https://random-ark-generator.herokuapp.com/api/auth/register`, submitValues)
        .then(response => {
          console.log("sign up success, login payload =", response.data)
          // setStatus(response.data)
          localStorage.setItem('token', JSON.stringify(response.data));
          resetForm();
          props.history.push('/');

        })
        .catch(error => console.log("sign up errorz", error.response));
    }
  })(SignUpForm) 
  
  export default FormikSignUpForm;
  
