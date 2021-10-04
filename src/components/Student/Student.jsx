import React from 'react';
import './Student.css';

import Modal, {useModal} from '../Modal/Modal';
import ShowStudent from '../ShowStudent/ShowStudent';

const Student = ({student}) => {
  const {
    show: studentShow,
    toggleModal: toggleShowStudent,
    hideModal: hideStudent,
  } = useModal ();

  return (
    <div className="student">
      <Modal onHide={hideStudent} show={studentShow}>
        <ShowStudent student={student} />
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
