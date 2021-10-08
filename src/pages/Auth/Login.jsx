import React from 'react';
import './Auth.css';
import {getClone} from '../../Forms/fields';
import Form from '../../Forms/Form/Form';
import useForm from '../../hooks/useForm';
import {useAuthApi} from '../../hooks/useApi';
import {useUserUpdate} from '../../Contexts/AuthContext';

const Login = () => {
  const {loading, login} = useAuthApi ();
  const {
    msg,
    fields,
    data: body,
    setMsg,
    setValue,
    errorHandler,
    reset,
  } = useForm ('', getClone ('login'));
  const updateUser = useUserUpdate ();

  const submitHandler = async e => {
    e.preventDefault ();
    const res = await login (JSON.stringify (body));
    const data = await res.json ();
    if (res.ok) {
      msg && setMsg('')
      updateUser (data.user);
      reset ();
    } else {
      setMsg(data?.message||'')
      errorHandler (data);
    }
  };

  return (
    <div className="authWrapper">
      <h2 className="authHeader">Login</h2>
      <form className="authForm">
        {msg && <h5 className="formMsg danger">{msg}</h5>}
        <Form setValue={setValue} fields={fields} />
        <button onClick={submitHandler} className="btn authBtn btnBlock">
          {loading ? 'Logging in ...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
