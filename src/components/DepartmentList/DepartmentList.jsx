import React, {useEffect, useState} from 'react';
import './DepartmentList.css';

import Modal, {useModal} from '../Modal/Modal';
import Department from '../Department/Department';
import { useDptApi } from '../../hooks/useApi';
import useList from '../../hooks/useList';
import ModelForm from '../../Forms/ModelForm';

const DepartmentList = () => {
  const { loading, index } = useDptApi()
  const {show, hideModal, toggleModal} = useModal ();
  const { loadItems, items:departments, prependItem, MoreBtn } = useList()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      loadItems(index)
      setLoaded(true)
    }
  }, [index, loadItems, loaded])

  return (
    <div className="dptWrapper">
      <Modal show={show} onHide={hideModal}>
        <ModelForm onDone={prependItem} modelName="department" />
      </Modal>
      <div className="dptHeader">
        <h2>Departments</h2>
        <button onClick={toggleModal} className="btn">Create department</button>
      </div>
      <div className="dptList"> 
        {loading && <div className="dpt">Loading...</div>}
        {departments.map (dpt => <Department dpt={dpt} key={dpt.id} />)}
      </div>

      <MoreBtn />
    </div>
  );
};

export default DepartmentList;
