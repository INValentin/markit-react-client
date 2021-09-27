import React from 'react'
import './TeacherList.css'

const TeacherList = () => {
    return (
        <div className="teacherWrapper">
      <h2 className="teacherHeader">Teachers</h2>

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
