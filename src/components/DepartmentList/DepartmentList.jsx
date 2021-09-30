import React, { useState } from 'react';
import './DepartmentList.css';

import { DepartmentForm } from '../../Forms';
import Modal, { useModal } from '../Modal/Modal'

const DepartmentList = () => {
  const { show, hideModal, toggleModal } = useModal()

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
