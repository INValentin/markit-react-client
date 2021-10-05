import React from 'react';
import './Module.css';

import Modal, {useModal} from '../Modal/Modal';
import ShowModule from '../ShowModule/ShowModule';
import ModelForm from '../../Forms/ModelForm';

const Module = ({module}) => {
  const {
    show: moduleShow,
    toggleModal: toggleShowModule,
    hideModal: hideModule,
  } = useModal ();

const {
    show: showUpdate,
    showModal: showUpdateModal,
    hideModal: hideUpdateModal,
  } = useModal ();

  const modalShowHandler = () => {
    hideModule()
    showUpdateModal()
  }

  return (
    <div className="module">
      <Modal onHide={hideModule} show={moduleShow}>
        <ShowModule onUpdate={modalShowHandler} module={module} />
      </Modal>

      <Modal show={showUpdate} onHide={hideUpdateModal}>
        <ModelForm
          modelName={"module"}
          action="Update"
          instance={module}
        />
      </Modal>
      <span onClick={toggleShowModule} className="moduleName">
        {module.name}
      </span>
      <div className="moduleBtns">
        <button className="btn viewMarksBtn btnSm">View Marks</button>
      </div>
    </div>
  );
};

export default Module;
