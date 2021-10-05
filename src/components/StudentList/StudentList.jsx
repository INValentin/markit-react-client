import React, {useEffect, useState } from 'react';
import './StudentList.css';

import Modal, { useModal } from "../Modal/Modal"
import Student from '../Student/Student';
import { useStudentApi } from '../../hooks/useApi';
import useList from '../../hooks/useList';
import ModelForm from '../../Forms/ModelForm';

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
        <ModelForm modelName="student" onDone={prependItem} />
      </Modal>
      <div className="studentHeader">
      <h2 className="studentHeader">Students</h2>
      <button onClick={toggleModal} className="btn">Create Student</button>
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
