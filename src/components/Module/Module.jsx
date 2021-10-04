import React from 'react';
import './Module.css';

import Modal, {useModal} from '../Modal/Modal';
import ShowModule from '../ShowModule/ShowModule';

const Module = ({module}) => {
  const {
    show: moduleShow,
    toggleModal: toggleShowModule,
    hideModal: hideModule,
  } = useModal ();
  return (
    <div className="module">
      <Modal onHide={hideModule} show={moduleShow}>
        <ShowModule module={module} />
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
