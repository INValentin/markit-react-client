import React, { useState, useEffect } from 'react'
import './TeacherList.css'

import Modal, { useModal } from '../Modal/Modal'
import { TeacherForm } from '../../Forms'
import Teacher from '../Teacher/Teacher'
import { useTeacherApi } from '../../hooks/useApi'

const TeacherList = () => {
  const [teachers, setTeachers] = useState([])
  const { show, toggleModal, hideModal } = useModal()
  const { loading, index } = useTeacherApi()

  useEffect(() => {
    index()
    .then(res => {
      return res.json()
    })
    .then(data => {
      setTeachers(data.data)
    })
    .catch(err => console.error(err))
  }, [])
   
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
        {loading && <div className="teacher">Loading...</div>}
        {teachers.map(t => <Teacher teacher={t} key={t.name} />)}
      </div>

      <button className="btn moreBtn btnSm">More</button>
    </div>
    )
}

export default TeacherList
