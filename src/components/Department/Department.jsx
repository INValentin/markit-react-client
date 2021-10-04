import React from 'react';
import Modal, {useModal} from '../Modal/Modal';
import ShowDepartment from '../ShowDepartment/ShowDepartment';
import './Department.css';

const Department = ({dpt}) => {
  const {show, toggleModal, hideModal} = useModal ();

  return (
    <div className="dpt">
      <Modal onHide={hideModal} show={show}>
        <ShowDepartment department={dpt} />
      </Modal>
      <span onClick={toggleModal} className="dptName">{dpt.name}</span>
    </div>
  );
};

export default Department;
