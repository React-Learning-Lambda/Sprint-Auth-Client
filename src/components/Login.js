import React from "react";
import { Button } from "react-bulma-components";
import { Formik, Form, Field } from "formik";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

export default ({history}) => {
  const initialForm = {
    username: "",
    password: ""
  };

  const attemptLogin = (formValues, actions) => {
    axiosWithAuth()
      .post("auth/login", formValues)
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        actions.resetForm();
        history.push("/jokes");
      })
      .catch(err => console.log(err));
  };
  return (
    <Formik
      initialValues={initialForm}
      onSubmit={attemptLogin}
      render={props => (
        <StyledForm>
          <h3>Login</h3>
          <Field name="username" type="text" placeholder="Username" />
          <Field name="password" type="password" placeholder="Password" />
          <Button type="submit" color="info">
            Login
          </Button>
        </StyledForm>
      )}
    />
  );
};


const StyledForm = styled(Form)`
  input {
    width: 80%;
    margin: .3rem auto;
  }

  button {
    width: 8rem;
    margin: .3rem auto;

  }
`