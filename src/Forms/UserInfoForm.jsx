import React from 'react';

const UserInfoForm = () => {
  return (
    <form action="">
      <h2 className="formHeader">User Info</h2>
      <div className="inputWrapper">
        <label htmlFor="c-name">Name</label>
        <input id="c-name" type="text" />
      </div>
      <div className="inputWrapper">
        <label htmlFor="c-email">E-mail</label>
        <input id="c-email" type="email" />
      </div>
      <div className="inputWrapper">
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="number" />
      </div>
      <button className="btn formSubmitBtn">Change Info</button>
    </form>
  );
};

export default UserInfoForm;
