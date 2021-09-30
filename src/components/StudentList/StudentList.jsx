import React from 'react';
import './StudentList.css';

import Modal, { useModal } from "../Modal/Modal"
import { StudentForm } from '../../Forms';

const StudentList = () => {
  const {show, hideModal, toggleModal} = useModal()


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
        <div className="student">
          <span className="studentName">Willy Native</span>
          <div className="studentBtns">
            <button className="btn viewMarksBtn btnSm">View Marks</button>
          </div>
        </div>
        <div className="student">
          <span className="studentName">Mahoro Deborah</span>
          <div className="studentBtns">
            <button className="btn viewMarksBtn btnSm">View Marks</button>
          </div>
        </div>
        <div className="student">
          <span className="studentName">Ange Modal</span>
          <div className="studentBtns">
            <button className="btn viewMarksBtn btnSm">View Marks</button>
          </div>
        </div>
        <div className="student">
          <span className="studentName">Kagabo John</span>
          <div className="studentBtns">
            <button className="btn viewMarksBtn btnSm">View Marks</button>
          </div>
        </div>
        <div className="student">
          <span className="studentName">Winny Houston</span>
          <div className="studentBtns">
            <button className="btn viewMarksBtn btnSm">View Marks</button>
          </div>
        </div>
        <div className="student">
          <span className="studentName">John Snow</span>
          <div className="studentBtns">
            <button className="btn viewMarksBtn btnSm">View Marks</button>
          </div>
        </div>
      </div>

      <button className="btn moreBtn btnSm">More</button>
    </div>
  );
};

export default StudentList;
