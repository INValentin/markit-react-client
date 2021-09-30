import React from 'react';
import './Teacher.css';

const Teacher = ({teacher}) => {
  return (
    <div className="teacher">
      <span className="teacherName">{teacher.name}</span>
    </div>
  );
};

export default Teacher;
