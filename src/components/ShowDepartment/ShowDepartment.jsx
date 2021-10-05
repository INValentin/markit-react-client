import React from 'react';

const ShowDepartment = ({department, onDelete, onUpdate}) => {
  return (
    <div className="showWrapper">
      <h2 className="showHeader">{department.name}</h2>
      <h4 className="actionsHeader">Actions</h4>
      <div className="actionsWrapper">
        <div className="actionsList">
          <button onClick={() => onUpdate && onUpdate()} className="actionBtn btnSuccess btn">Update</button>
          <button onClick={() => onDelete && onDelete()} className="actionBtn btnDanger btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ShowDepartment;
