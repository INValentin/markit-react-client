import React from 'react';
import './Teacher.css';
import Modal, {useModal} from '../Modal/Modal';
import ShowTeacher from '../ShowTeacher/ShowTeacher';
import ModelForm from '../../Forms/ModelForm';
import {useTeacherApi} from '../../hooks/useApi';

const Teacher = ({teacher, onUpdate, onDelete}) => {
  const {loading, destroy} = useTeacherApi ();
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

  const deleteHandler = async () => {
    const res = await destroy (teacher.id);
    const data = await res.json ();
    if (res.ok && data) {
      onDelete (teacher);
    }
  };

  return (
    <div className="teacher">
      {loading && <span className="loader" />}
      {!loading &&
        <React.Fragment>
          <Modal show={show} onHide={hideModal}>
            <ShowTeacher
              onDelete={deleteHandler}
              onUpdate={showUpdateModalHandler}
              teacher={teacher}
            />
          </Modal>
          <Modal show={showUpdate} onHide={hideUpdateModal}>
            <ModelForm
              onDone={onUpdate}
              modelName={'teacher'}
              action="Update"
              instance={teacher}
            />
          </Modal>
          <span onClick={toggleModal} className="teacherName">
            {teacher.name}
          </span>
        </React.Fragment>}
    </div>
  );
};

export default Teacher;
