import React from 'react';
import ModelForm from '../../Forms/ModelForm';
import {useDptApi} from '../../hooks/useApi';
import Modal, {useModal} from '../Modal/Modal';
import ShowDepartment from '../ShowDepartment/ShowDepartment';
import './Department.css';

const Department = ({dpt, onDelete, onUpdate}) => {
  const {loading, destroy} = useDptApi ();
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

  const deleteHandler = async () => {
    const res = await destroy (dpt.id);
    const data = await res.json ();
    if (res.ok && data) {
      onDelete (dpt);
    }
  };

  return (
    <div className="dpt">
      {!loading
        ? <React.Fragment>
            <Modal onHide={hideModal} show={show}>
              <ShowDepartment
                onDelete={deleteHandler}
                onUpdate={modalShowHandler}
                department={dpt}
              />
            </Modal>
            <Modal show={showUpdate} onHide={hideUpdateModal}>
              <ModelForm
                onDone={onUpdate}
                modelName={'department'}
                action="Update"
                instance={dpt}
              />
            </Modal>
            <span onClick={toggleModal} className="dptName">{dpt.name}</span>
          </React.Fragment>
        : <span className="loader" />}
    </div>
  );
};

export default Department;
