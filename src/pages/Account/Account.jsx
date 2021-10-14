import React, { useState } from "react";
import "./Account.css";

import Modal from "../../components/Modal/Modal";
import { UserInfoForm } from "../../Forms";
import { PasswordForm } from "../../Forms";
import Hide from "../../components/Hide/Hide";
import useToken from "../../hooks/useToken";
import { useUser, useUserUpdate } from "../../Contexts/AuthContext";
import { useHistory } from "react-router-dom";

const Account = () => {
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState("");
  const updateUser = useUserUpdate();
  const { removeToken } = useToken();
  const history = useHistory();
  const user = useUser();

  const formShowHandler = (formType) => {
    setShowModal(true);
    setFormType(formType);
  };

  const toggleHandler = () => {
    setShowModal((prev) => !prev);
  };

  const logoutHandler = () => {
    removeToken();
    updateUser(null);
    history.push("/login");
  };

  return (
    <div>
      <Modal onHide={toggleHandler} show={showModal}>
        <Hide show={formType === "userinfo"} Component={UserInfoForm} />
        <Hide show={formType === "password"} Component={PasswordForm} />
      </Modal>
      <div className="profileWrapper">
        <div className="userAvatar">{user?.name[0].toUpperCase()}</div>
        <div className="userInfoWrapper">
          <div className="userName">
            <span>{user.name}</span>
          </div>
          <div className="userRole">
            <span style={{ textTransform: "capitalize" }}>{user.type}</span>
          </div>
        </div>
        <div className="profileBtns">
          <button onClick={logoutHandler} className="btn">
            Logout
          </button>
        </div>
      </div>
      <div className="personalInfoWrapper">
        <h2>Personal Info</h2>
        <div className="personalInfo">
          <div className="info">
            <span className="infoKey">E-mail: </span>
            <span className="infoValue">{user.email}</span>
          </div>
          <div className="info">
            <span className="infoKey">Phone: </span>
            <span className="infoValue">{user.phone || "None"}</span>
          </div>
        </div>
        <button
          onClick={(e) => formShowHandler("userinfo")}
          className="btn perosonalInfoBtn"
        >
          Change Info
        </button>
        <button
          onClick={(e) => formShowHandler("password")}
          className="btn perosonalInfoBtn"
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Account;
