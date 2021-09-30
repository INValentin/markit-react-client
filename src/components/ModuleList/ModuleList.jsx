import React, {useState} from 'react';
import './ModuleList.css';

import {ModuleForm} from '../../Forms';
import Modal, {useModal} from '../Modal/Modal';
import Module from '../Module/Module';

const ModuleList = () => {
  const {show, toggleModal, hideModal} = useModal ();
  const [modules] = useState ([
    {name: 'Mathematics I'},
    {name: 'Programming'},
    {name: 'Statistics'},
    {name: 'Physics II'},
  ]);

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
        {modules.map (mod => <Module module={mod} key={mod.name} />)}
      </div>
      <button className="btn btnSm moreBtn">More</button>
    </div>
  );
};

export default ModuleList;
