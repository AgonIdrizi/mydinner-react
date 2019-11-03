import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

const propTypes = {
  component: PropTypes.func.isRequired,
  isAuthed: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  location: PropTypes.object
};

export const AuthedRoute = props => {
  return props.isAuthed ? <Route {...props} /> : <Redirect to="/" />;
};

export const UnAuthedRoute = props => {
  return !props.isAuthed ? <Route {...props} /> : <Redirect to="/" />
};
