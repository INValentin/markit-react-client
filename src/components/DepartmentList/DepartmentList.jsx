import React, {useState} from 'react';
import './DepartmentList.css';

import {DepartmentForm} from '../../Forms';
import Modal, {useModal} from '../Modal/Modal';
import Department from '../Department/Department';

const DepartmentList = () => {
  const [departments, /*setDepartments*/] = useState ([
    {name: 'Computer Science'},
    {name: 'Civil Engineering'},
    {name: 'Computer Electronics'},
    {name: 'Pure Mathematics'},
    {name: 'Electricity'},
  ]);
  const {show, hideModal, toggleModal} = useModal ();

  return (
    <div className="dptWrapper">
      <Modal show={show} onHide={hideModal}>
        <DepartmentForm />
      </Modal>
      <div className="dptHeader">
        <h2>Departments</h2>
        <button onClick={toggleModal} className="btn">Create department</button>
      </div>
      <div className="dptList">
        {departments.map (dpt => <Department dpt={dpt} key={dpt.name} />)}
      </div>

      <button className="btn btnSm moreBtn">More</button>
    </div>
  );
};

export default DepartmentList;
