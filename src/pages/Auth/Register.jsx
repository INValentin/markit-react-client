import React from 'react';
import './Auth.css';
import {getClone} from '../../Forms/fields';
import Form from '../../Forms/Form/Form';
import useForm from '../../hooks/useForm';

const Register = () => {
  const {fields, setValue} = useForm ('', getClone ('register'));

  const submitHandler = e => {
    e.preventDefault ();
  };

  return (
    <div className="authWrapper">
      <h2 className="authHeader">Register</h2>
      <form className="authForm">
        <Form setValue={setValue} fields={fields} />
        <button onClick={submitHandler} className="btn authBtn btnBlock">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
