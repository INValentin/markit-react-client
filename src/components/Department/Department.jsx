import React from 'react';
import ModelForm from '../../Forms/ModelForm';
import Modal, {useModal} from '../Modal/Modal';
import ShowDepartment from '../ShowDepartment/ShowDepartment';
import './Department.css';

const Department = ({dpt}) => {
  const {show, toggleModal, hideModal} = useModal ();
  const {
    show: showUpdate,
    showModal: showUpdateModal,
    hideModal: hideUpdateModal,
  } = useModal ();

  const modalShowHandler = () => {
    hideModal ();
    showUpdateModal ();
  };

  return (
    <div className="dpt">
      <Modal onHide={hideModal} show={show}>
        <ShowDepartment onUpdate={modalShowHandler} department={dpt} />
      </Modal>
      <Modal show={showUpdate} onHide={hideUpdateModal}>
        <ModelForm modelName={'department'} action="Update" instance={dpt} />
      </Modal>
      <span onClick={toggleModal} className="dptName">{dpt.name}</span>
    </div>
  );
};

export default Department;
