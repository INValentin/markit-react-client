import React, {useEffect, useState} from 'react';
import './ModuleList.css';

import Modal, {useModal} from '../Modal/Modal';
import Module from '../Module/Module';
import {useModuleApi} from '../../hooks/useApi';
import useList from '../../hooks/useList';
import ModelForm from '../../Forms/ModelForm';

const ModuleList = () => {
  const {show, toggleModal, hideModal} = useModal ();
  const {loading, index} = useModuleApi ();
  const { loadItems, items:modules, prependItem, MoreBtn } = useList()
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
        <ModelForm onDone={prependItem} modelName="module" />
      </Modal>

      <div className="moduleHeader">
        <h2 className="moduleHeader">Modules</h2>
        <button onClick={toggleModal} className="btn">Create Module</button>
      </div>
      <div className="moduleList">
        {loading && <div className="module">Loading...</div>}
        {modules.map (mod => <Module module={mod} key={mod.name} />)}
        {!modules.length && !loading && <div className="module">No modules found.</div>}
      </div>
      <MoreBtn />
    </div>
  );  
};

export default ModuleList;
