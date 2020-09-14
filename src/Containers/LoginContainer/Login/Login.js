import React, { useContext } from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import Button from "../../../Components/UI/Button/Button";
import { TextFormField } from "../../../Components/UI/TextFormFields/TextFormField/TextFormField";
import ErrorMessage from "../../../Components/UI/ErrorMessage/ErrorMessage";
import "./Login.scss";

const schema = yup.object({
  username: yup
    .string()
    .required()
    .min(3),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password must be alphanumeric.")
});

const Login = () => {
  const context = useContext(UserContext);
  const { onUserLoginHandler } = context;
 
  return (
    <div className="Login">
      <h2 className="title">Login</h2>
      <Formik
        validationSchema={schema}
        initialValues={{ username: "", email: "" }}
        onSubmit={(values) => onUserLoginHandler(values)}
      >
        {(props) => (
          <Form>
            <Field
              id="username"
              label="Username"
              name="username"
              placeholder="Username"
              component={TextFormField}
            />
            <ErrorMessage data-testid="usernameError" name="username" />
            <Field
              id="password"
              label="Password"
              name="password"
              placeholder="Password"
              component={TextFormField}
            />
            <ErrorMessage name="password" />
            <button className={["ant-btn ant-btn-primary"]} disabled={!props.isValid} type="submit">Login</button>
          </Form>
        )}
      </Formik>
      <div className="singUpLink">
        <span>Not registered?</span>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </div>
  );
};
export default Login;
