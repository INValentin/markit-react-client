import React from 'react';
import './DepartmentList.css';

const DepartmentList = () => {
  return (
    <div className="dptWrapper">
      <h2 className="dptHeader">Departments</h2>
      <div className="dptList">
        <div className="dpt">
          <span className="dptName">Computer Science</span>
        </div>
        <div className="dpt">
          <span className="dptName">Civil Engineering</span>
        </div>
        <div className="dpt">
          <span className="dptName">Computer Electronics</span>
        </div>
        <div className="dpt">
          <span className="dptName">Pure Mathematics</span>
        </div>
        <div className="dpt">
          <span className="dptName">Electricity</span>
        </div>
      </div>
      <button className="btn btnSm moreBtn">More</button>
    </div>
  );
};

export default DepartmentList;
