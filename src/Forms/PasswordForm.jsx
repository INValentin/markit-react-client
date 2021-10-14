import React from "react";
import { usePasswordChangeApi } from "../hooks/useApi";
import useForm from "../hooks/useForm";
import fields from "./fields";
import Form from "./Form/Form";

const PasswordForm = () => {
  const { loading, changePassword } = usePasswordChangeApi();
  const {
    msg,
    fields: passwordFields,
    setValue,
    setAttr,
    send,
    setError,
  } = useForm("", fields.password);

  const submitHandler = (e) => {
    e.preventDefault();
    send(changePassword);
  };

  return (
    <form action="">
      <h2 className="formHeader">Change Password</h2>
      {msg && <h5 className="formMsg textDanger">{msg}</h5>}
      <Form
        fields={passwordFields}
        setValue={setValue}
        setError={setError}
        setAttr={setAttr}
      />
      <button onClick={submitHandler} className="btn formSubmitBtn">
        {loading ? "..." : "Change Password"}
      </button>
    </form>
  );
};

export default PasswordForm;
