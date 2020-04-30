import React from "react";
import * as Yup from "yup";
import { Button } from 'antd';
import "antd/es/button/style/index.css";
import { Formik, Form, Field } from "formik";
import { TextFormField } from "../../../Components/UI/FormFields/TextFormField";

const schema = Yup.object({
  username: Yup
    .string()
    .required()
    .min(3),
  email: Yup.string().email(),
  password: Yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  password_confirmation: Yup.string()
  .min(8, "Password is too short - should be 8 chars minimum.")
  .oneOf([Yup.ref('password'), null], "Password must match")
  .required('Password confirm is required')
});

const SignUp = () => {
  return (
    <div className="SignUp">
      <h2>Sign Up</h2>
      <Formik
        validationSchema={schema}
        initialValues={{
          username: "",
          email: "",
          password: "",
          password_confirmation: ""
        }}
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
              label="Email"
              name="email"
              placeholder="Email"
              component={TextFormField}
            />
            <Field 
              label="Password"
              name="password"
              placeholder="Password"
              component={TextFormField}
            />
            <Field 
              label="Password confirmation"
              name="password_confirmation"
              placeholder="Password confirmation"
              component={TextFormField}
            />
          </Form>
        )}
      </Formik>
      <Button type="primary" size="medium">Sign Up</Button>
    </div>
  );
};

export default SignUp;
