import React from 'react';
import './ModuleList.css';

import {ModuleForm} from '../../Forms';
import Modal, {useModal} from '../Modal/Modal';

const ModuleList = () => {
  const {show, toggleModal, hideModal} = useModal ();

  return (
    <div className="moduleWrapper">
      <Modal onHide={hideModal} show={show}>
        <ModuleForm />
      </Modal>
      <div className="moduleHeader">
        <h2 className="moduleHeader">Modules</h2>
        <button onClick={toggleModal} className="btn">Create Module</button>
      </div>
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
