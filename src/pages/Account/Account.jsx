import React, { useState } from 'react';
import './Account.css';

import Modal from '../../components/Modal/Modal';
import { UserInfoForm } from '../../Forms';
import { PasswordForm } from '../../Forms';
import Hide from '../../components/Hide/Hide';

const Account = () => {
  const [showModal, setShowModal] = useState(false)
  const [formType, setFormType] = useState('')

  const formShowHandler = formType => {
    setShowModal(true)
    setFormType(formType)
  }

  const toggleHandler = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div>
      <Modal onHide={toggleHandler} show={showModal}>
        <Hide show={formType === 'userinfo'} Component={UserInfoForm} />
        <Hide show={formType === 'password'} Component={PasswordForm} />
      </Modal>
      <div className="profileWrapper">
        <div className="userAvatar" />
        <div className="userInfoWrapper">
          <div className="userName"><span>DR. Mugabo James</span></div>
          <div className="userRole"><span>Admin</span></div>
        </div>
        <div className="profileBtns">
          <button className="btn">Logout</button>
        </div>
      </div>
      <div className="personalInfoWrapper">
        <h2>Personal Info</h2>
        <div className="personalInfo">
          <div className="info">
            <span className="infoKey">E-mail: </span>
            <span className="infoValue">mugabojames@gmail.com</span>
          </div>
          <div className="info">
            <span className="infoKey">Phone: </span>
            <span className="infoValue">0786415167</span>
          </div>
        </div>
        <button onClick={e=> formShowHandler('userinfo')} className="btn perosonalInfoBtn">Change Info</button>
        <button onClick={e=> formShowHandler('password')} className="btn perosonalInfoBtn">Change Password</button>
      </div>
    </div>
  );
};

export default Account;
