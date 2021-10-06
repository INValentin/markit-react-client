import React, {useEffect, useState} from 'react';
import './DepartmentList.css';

import Modal, {useModal} from '../Modal/Modal';
import Department from '../Department/Department';
import {useDptApi} from '../../hooks/useApi';
import useList from '../../hooks/useList';
import ModelForm from '../../Forms/ModelForm';

const DepartmentList = () => {
  const {loading, index} = useDptApi ();
  const {show, hideModal, toggleModal} = useModal ();
  const {
    loadItems,
    items: departments,
    changeItem,
    prependItem,
    MoreBtn,
    removeItem,
  } = useList ();
  const [loaded, setLoaded] = useState (false);

  useEffect (
    () => {
      if (!loaded) {
        loadItems (index);
        setLoaded (true);
      }
    },
    [index, loadItems, loaded]
  );

  const createdHandler = newItem => {
    hideModal ();
    prependItem (newItem);
  };

  return (
    <div className="dptWrapper">
      <Modal show={show} onHide={hideModal}>
        <ModelForm onDone={createdHandler} modelName="department" />
      </Modal>
      <div className="dptHeader">
        <h2>Departments</h2>
        <button onClick={toggleModal} className="btn">Create department</button>
      </div>
      <div className="dptList">
        {loading && <div className="dpt"><span className="loader" /></div>}
        {departments.map (dpt => (
          <Department
            onUpdate={data => changeItem (dpt, data)}
            onDelete={removeItem}
            dpt={dpt}
            key={dpt.id}
          />
        ))}
      </div>

      <MoreBtn />
    </div>
  );
};

export default DepartmentList;
