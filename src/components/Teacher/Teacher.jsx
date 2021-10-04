import React from 'react';
import './Teacher.css';
import Modal, {useModal} from '../Modal/Modal';
import ShowTeacher from '../ShowTeacher/ShowTeacher';

const Teacher = ({teacher}) => {
  const {show, toggleModal, hideModal} = useModal ();

  return (
    <div className="teacher">
      <Modal show={show} onHide={hideModal}>
        <ShowTeacher teacher={teacher} />
      </Modal>
      <span onClick={toggleModal} className="teacherName">{teacher.name}</span>
    </div>
  );
};

export default Teacher;
