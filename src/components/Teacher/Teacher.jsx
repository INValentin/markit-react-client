import React from 'react';
import './Teacher.css';
import Modal, {useModal} from '../Modal/Modal';
import ShowTeacher from '../ShowTeacher/ShowTeacher';
import {TeacherForm} from '../../Forms';

const Teacher = ({teacher, onUpdate, onDelete}) => {
  const {show, toggleModal, hideModal} = useModal ();
  const {
    show: showUpdate,
    showModal: showUpdateModal,
    hideModal: hideUpdateModal,
  } = useModal ();

  const showUpdateModalHandler = () => {
    hideModal ();
    showUpdateModal ();
  };

  const updateHandler = newTeacher => {
    console.log ('updated', newTeacher);
    onUpdate && onUpdate (newTeacher);
  };

  return (
    <div className="teacher">
      <Modal show={show} onHide={hideModal}>
        <ShowTeacher onUpdate={showUpdateModalHandler} teacher={teacher} />
      </Modal>
      <Modal show={showUpdate} onHide={hideUpdateModal}>
        <TeacherForm onDone={updateHandler} action="Update" teacher={teacher} />
      </Modal>
      <span onClick={toggleModal} className="teacherName">{teacher.name}</span>
    </div>
  );
};

export default Teacher;
