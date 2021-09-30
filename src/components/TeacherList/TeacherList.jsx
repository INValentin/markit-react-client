import React from 'react'
import './TeacherList.css'

import Modal, { useModal } from '../Modal/Modal'
import { TeacherForm } from '../../Forms'

const TeacherList = () => {
  const { show, toggleModal, hideModal } = useModal()
   
    return (
        <div className="teacherWrapper">
          <Modal onHide={hideModal} show={show}>
            <TeacherForm />
          </Modal>
          <div className="teacherHeader">
            <h2>Teachers</h2>
            <button onClick={toggleModal} className="btn">Create Teacher</button>
          </div>

      <div className="inputWrapper">
          <label htmlFor="searchTeacher">Search</label>
          <input type="search" placeholder="search teachers" id="searchTeacher" />
      </div>
      <br />

      <div className="teacherList">
        <div className="teacher">
          <span className="teacherName">Rutamu Willy</span>
        </div>
        <div className="teacher">
          <span className="teacherName">Gikoko Hajj</span>
        </div>
        <div className="teacher">
          <span className="teacherName">Ange Mukasine</span>
        </div>
        <div className="teacher">
          <span className="teacherName">Dr. Muganga John</span>
        </div>
        <div className="teacher">
          <span className="teacherName">David J Malan</span>
        </div>
        <div className="teacher">
          <span className="teacherName">Ali Huo</span>
        </div>
      </div>

      <button className="btn moreBtn btnSm">More</button>
    </div>
    )
}

export default TeacherList
