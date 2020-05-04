import React from "react";
import * as Yup from "yup";
import Button from "../../../Components/UI/Button/Button";
import { Formik, Form, Field } from "formik";
import { TextFormField } from "../../../Components/UI/TextFormFields/TextFormField/TextFormField";
import ErrorMessage from "../../../Components/UI/ErrorMessage/ErrorMessage";
import "./SignUp.scss";

const schema = Yup.object({
  username: Yup.string()
    .required()
    .min(3),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  password_confirmation: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Password confirm is required")
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
        {({ values, touched, errors }) => (
          <Form>
            <Field
              label="Username"
              name="username"
              placeholder="Username"
              component={TextFormField}
            />
            <ErrorMessage name="username" />
            <Field
              label="Email"
              name="email"
              placeholder="Email"
              component={TextFormField}
            />
            <ErrorMessage name="email" />
            <Field
              label="Password"
              name="password"
              placeholder="Password"
              component={TextFormField}
            />
            <ErrorMessage name="password" />
            <Field
              label="Password confirmation"
              name="password_confirmation"
              placeholder="Password confirmation"
              component={TextFormField}
            />
            <ErrorMessage name="password_confirmation" />
          </Form>
        )}
      </Formik>
      <Button text="Sign Up" type="primary" size="medium" />
    </div>
  );
};

export default SignUp;
