import React, {useState, useEffect} from 'react';
import './DepartmentList.css';

import {DepartmentForm} from '../../Forms';
import Modal, {useModal} from '../Modal/Modal';
import Department from '../Department/Department';
import { useDptApi } from '../../hooks/useApi';

const DepartmentList = () => {
  const { loading, index } = useDptApi()
  const [departments, setDepartments] = useState ([]);
  const {show, hideModal, toggleModal} = useModal ();

  useEffect(() => {
    index()
    .then(res => res.json())
    .then(data => {
      setDepartments(data.data)
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="dptWrapper">
      <Modal show={show} onHide={hideModal}>
        <DepartmentForm />
      </Modal>
      <div className="dptHeader">
        <h2>Departments</h2>
        <button onClick={toggleModal} className="btn">Create department</button>
      </div>
      <div className="dptList"> 
        {loading && <div className="dpt">Loading...</div>}
        {departments.map (dpt => <Department dpt={dpt} key={dpt.name} />)}
      </div>

      <button className="btn btnSm moreBtn">More</button>
    </div>
  );
};

export default DepartmentList;
