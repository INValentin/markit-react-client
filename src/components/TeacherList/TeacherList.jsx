import React, { useState } from 'react'
import './TeacherList.css'

import Modal, { useModal } from '../Modal/Modal'
import { TeacherForm } from '../../Forms'
import Teacher from '../Teacher/Teacher'

const TeacherList = () => {
  const [teachers, setTeachers] = useState([
    {name: "Rutamu Willy"},
    {name: "Gikoko Hajj"},
    {name: "Ange Mukasine"},
    {name: "Dr. Muganga John"},
    {name: "David J Malan"}
  ])
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
        {teachers.map(t => <Teacher teacher={t} key={t.name} />)}
      </div>

      <button className="btn moreBtn btnSm">More</button>
    </div>
    )
}

export default TeacherList
