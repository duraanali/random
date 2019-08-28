import React from 'react';
import "./LoginForm.css";
import {
    withFormik,
    Form,
    Field
} from "formik";

import * as Yup from "yup";
import axios from "axios";
import { Link } from 'react-router-dom';

function LoginForm( {
    errors,
    touched
}) {
    return (

            <div className="container">
            <div className="form-cover">

            <Form className = "form" >
            <h2 className = "loginTitle" > Sign In </h2> 
            <label> Email </label> 
            {touched.email && errors.email && <p> {errors.email} </p>} 
            <Field type="email"
                name="email"
                className="input"
                placeholder="jane@gmail.com" />

                    <label> Password </label> 
                    {touched.password && errors.password && <p> {errors.password} </p>} 
                    <Field type = "password"
                        name = "password"
                        className = "input"
                        placeholder = "Enter your password" />
                            <button type = "submit"
                        className = "btnSignIn"> Login </button> 
                        <p className="notMember"> Not a member yet? <Link to='/signup'> Sign Up </Link></p >
                            </Form> 
                            </div> 
                            </div>
                    )
            }


            const FormikLoginForm = withFormik({
                mapPropsToValues({
                    email,
                    password
                }) {
                    return {
                        email: email || "",
                        password: password || "",


                    };
                },
                validationSchema: Yup.object().shape({
                    email: Yup.string()
                        .required("Email is required"),
                    password: Yup.string()
                        .required("Password is required")
                }),
                handleSubmit(values, {
                        resetForm,
                        setStatus,
                        props
                    }) {
              
                    axios.post(`https://random-ark-generator.herokuapp.com/api/auth/login`, values)
                        .then(res => {
                            console.log("login success, login Payload =", res.data.token)
                          setStatus(res.data.token)
                          resetForm();
                            localStorage.setItem('token', res.data.token);
                           props.history.push('/welcome');
                        })
                        .catch(err => console.log(err.response));

                }
            })(LoginForm);

            export default FormikLoginForm;