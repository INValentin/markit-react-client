import React from 'react';
import './Student.css';

import Modal, { useModal } from '../Modal/Modal';
import { MarksForm } from '../../Forms';

const Student = ({ student }) => {
    const { show, toggleModal, hideModal } = useModal()


  return (
    <div className="student">
        <Modal onHide={hideModal} show={show}>
            <MarksForm />
        </Modal>
      <span className="studentName">{student.name}</span>
      <div className="studentBtns">
        <button onClick={toggleModal} className="btn viewMarksBtn btnSm">Create Marks</button>
        <button className="btn viewMarksBtn btnSm">View Marks</button>
      </div>
    </div>
  );
};

export default Student;
