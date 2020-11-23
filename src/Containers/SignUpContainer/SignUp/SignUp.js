import React, { useContext } from "react";
import * as Yup from "yup";
import { motion } from "framer-motion";
import Button from "../../../Components/UI/Button/Button";
import { Link, useHistory } from "react-router-dom";
import { useUser, singupUser } from "../../../contexts/UserContext";
import { Formik, Form, Field } from "formik";
import { divContainerVariant } from "../../../styles/animations/animationsVariants";
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
    .matches(/[a-zA-Z]/, "Password must be alphanumeric."),
  password_confirmation: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Password confirm is required")
});

const SignUp = () => {
  const history = useHistory();
  const [{user}, userDispatch] = useUser();

  const onSignUpHandler = values => {
    singupUser(userDispatch, values);
    history.push("/");
  };

  return (
    <motion.div
      variants={divContainerVariant}
      initial="hidden"
      animate="animate"
      exit="exit"
      className="SignUp"
    >
      <h2>Sign Up</h2>
      <Formik
        validationSchema={schema}
        initialValues={{
          username: "",
          email: "",
          password: "",
          password_confirmation: ""
        }}
        onSubmit={values => onSignUpHandler(values)}
      >
        {({ values, isValid, touched, errors }) => (
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
            <button
              className={["ant-btn ant-btn-primary"]}
              disabled={!isValid}
              type="submit"
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default SignUp;
