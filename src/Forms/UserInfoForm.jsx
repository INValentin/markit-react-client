import React, { useEffect, useState } from "react";
import { useUserInfoChangeApi } from "../hooks/useApi";
import useForm from "../hooks/useForm";
import fields from "./fields";
import Form from "./Form/Form";
import { useUser, useUserUpdate } from "../Contexts/AuthContext";

const UserInfoForm = () => {
  const user = useUser();
  const updateUser = useUserUpdate();
  const { loading, changeUserInfo } = useUserInfoChangeApi();
  const [didPopulate, setDidPopulate] = useState(false);
  const {
    msg,
    fields: userInfoFields,
    setValue,
    setAttr,
    send,
    setError,
    populateFields,
  } = useForm("", fields.change_info);

  useEffect(() => {
    if (!didPopulate) {
      populateFields(user);
      setDidPopulate(true);
    }
  }, [populateFields, user, didPopulate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await send(changeUserInfo, false);
    updateUser(data);
  };

  return (
    <form action="">
      <h2 className="formHeader">Change User Info</h2>
      {msg && <h5 className="formMsg textDanger">{msg}</h5>}
      <Form
        fields={userInfoFields}
        setValue={setValue}
        setError={setError}
        setAttr={setAttr}
      />
      <button onClick={submitHandler} className="btn formSubmitBtn">
        {loading ? "..." : "Change Info"}
      </button>
    </form>
  );
};

export default UserInfoForm;
