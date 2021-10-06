import React from 'react';
import './Student.css';

import Modal, {useModal} from '../Modal/Modal';
import ShowStudent from '../ShowStudent/ShowStudent';
import ModelForm from '../../Forms/ModelForm';
import StudentMarks from '../StudentMarks/StudentMarks';
import {useStudentApi} from '../../hooks/useApi';

const Student = ({student, onDelete, onUpdate}) => {
  const {loading, destroy} = useStudentApi ();

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

  const {
    show: showMarks,
    toggleModal: toggleMarksModal,
    hideModal: hideMarksModal,
  } = useModal ();

  const modalShowHandler = () => {
    hideStudent ();
    showUpdateModal ();
  };

  const deleteHandler = async () => {
    const res = await destroy (student.id);
    const data = await res.json ();
    if (res.ok && data) {
      onDelete (student);
    }
  };

  return (
    <div className="student">
      {!loading &&
        <React.Fragment>

          <Modal onHide={hideStudent} show={studentShow}>
            <ShowStudent
              onDelete={deleteHandler}
              onUpdate={modalShowHandler}
              student={student}
            />
          </Modal>
          <Modal show={showUpdate} onHide={hideUpdateModal}>
            <ModelForm
              onDone={onUpdate}
              modelName={'student'}
              action="Update"
              instance={student}
            />
          </Modal>
          <Modal show={showMarks} onHide={hideMarksModal}>
            <StudentMarks student={student} />
          </Modal>
          <span onClick={toggleShowStudent} className="studentName">
            {student.name}
          </span>
          <div className="studentBtns">
            <button
              onClick={toggleMarksModal}
              className="btn viewMarksBtn btnSm"
            >
              View Marks
            </button>
          </div>
        </React.Fragment>}
      {loading && <span className="loader" />}
    </div>
  );
};

export default Student;
