import React from 'react';

const PasswordForm = () => {
  return (
    <form action="">
      <h2 className="formHeader">Change Password</h2>
      <div className="inputWrapper">
        <label htmlFor="current">Current Password</label>
        <input id="current" type="password" />
      </div>
      <div className="inputWrapper">
        <label htmlFor="newpass">New Password</label>
        <input id="newpass" type="password" />
      </div>
      <div className="inputWrapper">
        <label htmlFor="re-newpass">Re-enter New Password</label>
        <input id="re-newpass" type="password" />
      </div>
      <button className="btn formSubmitBtn">Change Password</button>
    </form>
  );
};

export default PasswordForm;
