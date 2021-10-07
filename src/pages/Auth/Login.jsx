import React from 'react';
import './Auth.css';
import {getClone} from '../../Forms/fields';
import Form from '../../Forms/Form/Form';
import useForm from '../../hooks/useForm';

const Login = () => {
  const {fields, setValue} = useForm ('', getClone ('login'));

  const submitHandler = e => {
    e.preventDefault ();
  };

  return (
    <div className="authWrapper">
      <h2 className="authHeader">Login</h2>
      <form className="authForm">
        <Form setValue={setValue} fields={fields} />
        <button onClick={submitHandler} className="btn authBtn btnBlock">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
