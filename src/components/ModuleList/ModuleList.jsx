import React, {useEffect, useState} from 'react';
import './ModuleList.css';

import {ModuleForm} from '../../Forms';
import Modal, {useModal} from '../Modal/Modal';
import Module from '../Module/Module';
import {useModuleApi} from '../../hooks/useApi';
import useList from '../../hooks/useList';

const ModuleList = () => {
  const {show, toggleModal, hideModal} = useModal ();
  const {loading, index} = useModuleApi ();
  const { loadItems, items:modules } = useList()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      loadItems(index)
      setLoaded(true)
    }
  }, [index, loadItems, loaded])

  return (
    <div className="moduleWrapper">
      <Modal onHide={hideModal} show={show}>
        <ModuleForm />
      </Modal>

      <div className="moduleHeader">
        <h2 className="moduleHeader">Modules</h2>
        <button onClick={toggleModal} className="btn">Create Module</button>
      </div>
      {/* <div className="filterList">
        <div className="inputWrapper moduleFilter">
          <label htmlFor="dpt">Select Department</label>
          <select id="dpt">
            <option value="">Computer science</option>
            <option value="">Pure Mathematics</option>
            <option value="">Electricity</option>
            <option value="">Civil Engineering</option>
          </select>
        </div>
        <div className="inputWrapper moduleFilter">
          <label htmlFor="teacher">Select Teacher</label>
          <select id="teacher">
            <option value="">Rutamu Willy</option>
            <option value="">Gikoko Hajj</option>
            <option value="">Dr. Muganga John</option>
            <option value="">David J Malan</option>
          </select>
        </div>
      </div> */}
      <div className="moduleList">
        {loading && <div className="module">Loading...</div>}
        {modules.map (mod => <Module module={mod} key={mod.name} />)}
        {!modules.length && <div className="module">No modules found.</div>}
      </div>
      <button className="btn btnSm moreBtn">More</button>
    </div>
  );
};

export default ModuleList;
