import React, {useEffect, useState } from 'react';
import './StudentList.css';

import Modal, { useModal } from "../Modal/Modal"
import { StudentForm } from '../../Forms';
import Student from '../Student/Student';
import { useStudentApi } from '../../hooks/useApi';
import useList from '../../hooks/useList';

const StudentList = () => {
  const {show, hideModal, toggleModal} = useModal()
  const {index, loading} = useStudentApi()
  const { loadItems, items:students, prependItem, MoreBtn } = useList()
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    if (!loaded) {
      loadItems(index)
      setLoaded(true)
    }
  }, [loadItems, index, loaded])


  return (
    <div className="studentWrapper">
      {/* <span className="loader"></span> */}
      <Modal onHide={hideModal} show={show}>
        <StudentForm onDone={prependItem} />
      </Modal>
      <div className="studentHeader">
      <h2 className="studentHeader">Students</h2>
      <button onClick={toggleModal} className="btn">Create Student</button>
      </div>
      <div className="filterList">
        <div className="inputWrapper studentFilter">
          <label htmlFor="stdpt">Select Department</label>
          <select id="stdpt">
            <option value="">Computer science</option>
            <option value="">Pure Mathematics</option>
            <option value="">Electricity</option>
            <option value="">Civil Engineering</option>
          </select>
        </div>
        <div className="inputWrapper studentFilter">
          <label htmlFor="stdpt">Select Module</label>
          <select id="stdpt">
            <option value="">Analysis</option>
            <option value="">Calculus III</option>
            <option value="">Algorithms</option>
            <option value="">Cyber security</option>
          </select>
        </div>
      </div>

      <div className="studentList">
        {loading && <div className="student">Loading...</div>}
        {students.map(std => <Student student={std} key={std.name} />)}
      </div>

      <MoreBtn />
    </div>
  );
};

export default StudentList;
