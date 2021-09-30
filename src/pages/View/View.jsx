import React, { useState } from 'react';
import './View.css'

import Hide from '../../components/Hide/Hide';
import StudentList from '../../components/StudentList/StudentList';
import TeacherList from '../../components/TeacherList/TeacherList'; 
import DepartmentList from '../../components/DepartmentList/DepartmentList';
import ModuleList from '../../components/ModuleList/ModuleList';    


const View = () => {
    const [viewType, setViewType] = useState('department')

  return (
    <div>
      <h1 className="viewHeader">View</h1>
      <div className="viewBtnWrapper">
        <button onClick={() => setViewType('department')} className={`${viewType === 'department' ? 'active' : ''} btn viewBtn`}>Departments</button>
        <button onClick={() => setViewType('module')} className={`${viewType === 'module' ? 'active' : ''} btn viewBtn`}>Modules</button>
        <button onClick={() => setViewType('student')} className={`${viewType === 'student' ? 'active' : ''} btn viewBtn`}>Students</button>
        <button onClick={() => setViewType('teacher')} className={`${viewType === 'teacher' ? 'active' : ''} btn viewBtn`}>Teachers</button>
      </div>
      <Hide show={viewType === ''}>
          <h4>Click to view any of those.</h4>
        </Hide>
      <Hide show={viewType === 'student'} Component={StudentList} />
      <Hide show={viewType === 'teacher'} Component={TeacherList} />
      <Hide show={viewType === 'module'} Component={ModuleList} />
      <Hide show={viewType === 'department'} Component={DepartmentList} />
    </div>
  );
};

export default View;
