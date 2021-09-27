import React from 'react';
import './ModuleList.css';

const ModuleList = () => {

  return (
    <div className="moduleWrapper">
      <h2 className="moduleHeader">Modules</h2>
      <div className="filterList">
        <div className="inputWrapper moduleFilter">
          <label htmlFor="dpt">Select Department</label>
          <select id="dpt">
            <option value="">Computer science</option>
            <option value="">Pure Mathematics</option>
            <option value="">Electricity</option>
            <option value="">Civil Engineering</option>
          </select>
        </div>
        <div className="inputWrapper moduleFilter">
          <label htmlFor="teacher">Select Teacher</label>
          <select id="teacher">
            <option value="">Rutamu Willy</option>
            <option value="">Gikoko Hajj</option>
            <option value="">Dr. Muganga John</option>
            <option value="">David J Malan</option>
          </select>
        </div>
      </div>
      <div className="moduleList">
        <div className="module">
          <span className="moduleName">Mathematics I</span>
          <div className="moduleBtns">
            <button className="btn viewMarksBtn btnSm">View Marks</button>
          </div>
        </div>
        <div className="module">
          <span className="moduleName">Programming</span>
          <div className="moduleBtns">
            <button className="btn viewMarksBtn btnSm">View Marks</button>
          </div>
        </div>
        <div className="module">
          <span className="moduleName">Statistics</span>
          <div className="moduleBtns">
            <button className="btn viewMarksBtn btnSm">View Marks</button>
          </div>
        </div>
        <div className="module">
          <span className="moduleName">Physics II</span>
          <div className="moduleBtns">
            <button className="btn viewMarksBtn btnSm">View Marks</button>
          </div>
        </div>
      </div>
      <button className="btn btnSm moreBtn">More</button>
    </div>
  );
};

export default ModuleList;
