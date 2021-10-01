import React, {useState,useEffect } from 'react';
import './StudentList.css';

import Modal, { useModal } from "../Modal/Modal"
import { StudentForm } from '../../Forms';
import Student from '../Student/Student';
import { useStudentApi } from '../../hooks/useApi';

const StudentList = () => {
  const [students, setStudents] = useState([])
  const {show, hideModal, toggleModal} = useModal()
  const { loading, index } = useStudentApi()

  useEffect(() => {
    index()
    .then(res => {
      return res.json()
    })
    .then(data => {
      setStudents(data.data)
    })
    .catch(err => console.error(err))
  }, [])


  return (
    <div className="studentWrapper">
      <Modal onHide={hideModal} show={show}>
        <StudentForm />
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

      <button className="btn moreBtn btnSm">More</button>
    </div>
  );
};

export default StudentList;
