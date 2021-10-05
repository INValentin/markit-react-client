import React from 'react';
import './Student.css';

import Modal, {useModal} from '../Modal/Modal';
import ShowStudent from '../ShowStudent/ShowStudent';
import ModelForm from '../../Forms/ModelForm';

const Student = ({student}) => {
  const {
    show: studentShow,
    toggleModal: toggleShowStudent,
    hideModal: hideStudent,
  } = useModal ();

  const {
    show: showUpdate,
    showModal: showUpdateModal,
    hideModal: hideUpdateModal,
  } = useModal ();

  const modalShowHandler = () => {
    hideStudent()
    showUpdateModal()
  }

  return (
    <div className="student">
      <Modal onHide={hideStudent} show={studentShow}>
        <ShowStudent onUpdate={modalShowHandler} student={student} />
      </Modal>
      <Modal show={showUpdate} onHide={hideUpdateModal}>
        <ModelForm
          modelName={"student"}
          action="Update"
          instance={student}
        />
      </Modal>
      <span onClick={toggleShowStudent} className="studentName">
        {student.name}
      </span>
      <div className="studentBtns">
        <button className="btn viewMarksBtn btnSm">View Marks</button>
      </div>
    </div>
  );
};

export default Student;
