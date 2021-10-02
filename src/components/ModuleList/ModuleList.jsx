import React, {useState, useEffect} from 'react';
import './ModuleList.css';

import {ModuleForm} from '../../Forms';
import Modal, {useModal} from '../Modal/Modal';
import Module from '../Module/Module';
import { useDptApi } from '../../hooks/useApi';

const ModuleList = () => {
  const {show, toggleModal, hideModal} = useModal ();
  const [dptId, setDptId] = useState(null)
  const [modules, setModules] = useState ([]);
  const { loading, listModules } = useDptApi()

  useEffect(() => {
    if (!Number(dptId)) return undefined

    listModules(dptId)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setModules(data.data)
    })
    .catch(err => console.error(err))
  }, [dptId])

  const addModuleHandler = module => {
    setModules([...modules, module])
  }

  return (
    <div className="moduleWrapper">
      <Modal onHide={hideModal} show={show}>
        <ModuleForm onSuccess={addModuleHandler} />
      </Modal>

      <div className="moduleHeader">
        <h2 className="moduleHeader">Modules</h2>
        <button onClick={toggleModal} className="btn">Create Module</button>
      </div>
      <div className="filterList">
        <div className="inputWrapper moduleFilter">
          <label htmlFor="dpt">Select Department</label>
          <select id="dpt">
            <option value="">Computer science</option>
            <option value="">Pure Mathematics</option>
            <option value="">Electricity</option>
            <option value="">Civil Engineering</option>
          </select>
        </div>
        {/* <div className="inputWrapper moduleFilter">
          <label htmlFor="teacher">Select Teacher</label>
          <select id="teacher">
            <option value="">Rutamu Willy</option>
            <option value="">Gikoko Hajj</option>
            <option value="">Dr. Muganga John</option>
            <option value="">David J Malan</option>
          </select>
        </div> */}
      </div>
      <div className="moduleList">
        { loading && <div className="module">Loading...</div> }
        {modules.map (mod => <Module module={mod} key={mod.name} />)}
        {!dptId && <p>Please select department to show modules for.</p>}
        {(dptId && !modules.length) && <div className="module">No modules found.</div>}
      </div>
      <button className="btn btnSm moreBtn">More</button>
    </div>
  );
};

export default ModuleList;
