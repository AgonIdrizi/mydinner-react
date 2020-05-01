import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import Button from "../../../Components/UI/Button/Button";
import { TextFormField } from "../../../Components/UI/FormFields/TextFormField";
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
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
});

const Login = () => {
  return (
    <div className="Login">
      <h2>Login</h2>
      <Formik
        validationSchema={schema}
        initialValues={{ username: "", email: "" }}
        onSubmit={() => {}}
      >
        {() => (
          <Form>
            <Field
              label="Username"
              name="username"
              placeholder="Username"
              component={TextFormField}
            />
            <Field
              label="Password"
              name="password"
              placeholder="Password"
              component={TextFormField}
            />
          </Form>
        )}
      </Formik>
      <Button text="Login" type="primary" size="medium" />
    </div>
  );
};
export default Login;
