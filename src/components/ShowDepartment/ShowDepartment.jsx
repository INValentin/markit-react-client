import React from 'react';

const ShowDepartment = ({department}) => {
  return (
    <div className="showWrapper">
      <h2 className="showHeader">{department.name}</h2>
      {/* <DetailList details={details} /> */}
      <h4 className="actionsHeader">Actions</h4>
      <div className="actionsWrapper">
        <div className="actionsList">
          <button className="actionBtn btnSuccess btn">Update</button>
          <button className="actionBtn btnDanger btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ShowDepartment;
