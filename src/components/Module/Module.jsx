import React from 'react';
import './Module.css';

import Modal, {useModal} from '../Modal/Modal';
import ShowModule from '../ShowModule/ShowModule';
import ModelForm from '../../Forms/ModelForm';
import ModuleMarks from '../ModuleMarks/ModuleMarks';
import {useModuleApi} from '../../hooks/useApi';

const Module = ({module, onDelete, onUpdate}) => {
  const {loading, destroy} = useModuleApi ();
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

  const {
    show: showMarks,
    toggleModal: toggleMarksModal,
    hideModal: hideMarksModal,
  } = useModal ();

  const modalShowHandler = () => {
    hideModule ();
    showUpdateModal ();
  };

  const deleteHandler = async () => {
    const res = await destroy (module.id);
    const data = await res.json ();
    if (res.ok && data) {
      onDelete (module);
    }
  };

  return (
    <div className="module">
      {loading && <span className="loader" />}
      {!loading &&
        <React.Fragment>
          <Modal onHide={hideModule} show={moduleShow}>
            <ShowModule
              onDelete={deleteHandler}
              onUpdate={modalShowHandler}
              module={module}
            />
          </Modal>

          <Modal show={showUpdate} onHide={hideUpdateModal}>
            <ModelForm
              onDone={onUpdate}
              modelName={'module'}
              action="Update"
              instance={module}
            />
          </Modal>
          <Modal show={showMarks} onHide={hideMarksModal}>
            <ModuleMarks module={module} />
          </Modal>

          <span onClick={toggleShowModule} className="moduleName">
            {module.name}
          </span>
          <div className="moduleBtns">
            <button
              onClick={toggleMarksModal}
              className="btn viewMarksBtn btnSm"
            >
              View Marks
            </button>
          </div>
        </React.Fragment>}
    </div>
  );
};

export default Module;
