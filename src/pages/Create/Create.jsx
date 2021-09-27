import React, {useState} from 'react';
import './Create.css';

import Modal from '../../components/Modal/Modal';
import Hide from '../../components/Hide/Hide';
import {
  DepartmentForm,
  StudentForm,
  TeacherForm,
  ModuleForm,
  MarksForm,
} from '../../Forms';

const Create = () => {
  const [showModal, setShowModal] = useState (false);
  const [formType, setFormType] = useState ('');

  const hideHandler = () => {
    setShowModal (false);
  };

  const modalShowHandler = formType => {
    setShowModal (true);
    setFormType (formType);
  };

  return (
    <div>
      <Modal onHide={hideHandler} show={showModal}>
        <Hide show={formType === 'student'}>
          <StudentForm />
        </Hide>
        <Hide show={formType === 'teacher'}>
          <TeacherForm />
        </Hide>
        <Hide show={formType === 'module'}>
          <ModuleForm />
        </Hide>
        <Hide show={formType === 'department'}>
          <DepartmentForm />
        </Hide>
        <Hide show={formType === 'marks'}>
          <MarksForm />
        </Hide>
      </Modal>
      <h1 className="createHeader">Create</h1>
      <div className="createBtnWrapper">
        <button
          onClick={() => modalShowHandler ('department')}
          className="btn createBtn"
        >
          Department
        </button>
        <button
          onClick={() => modalShowHandler ('module')}
          className="btn createBtn"
        >
          Module
        </button>
        <button
          onClick={() => modalShowHandler ('student')}
          className="btn createBtn"
        >
          Student
        </button>
        <button
          onClick={() => modalShowHandler ('teacher')}
          className="btn createBtn"
        >
          Teacher
        </button>
        <button
          onClick={() => modalShowHandler ('marks')}
          className="btn createBtn"
        >
          Marks
        </button>
      </div>

      <h4>Click to create any of those.</h4>
    </div>
  );
};

export default Create;
