import React, {useEffect, useState} from 'react';
import './TeacherList.css';

import Modal, {useModal} from '../Modal/Modal';
// import {TeacherForm} from '../../Forms';
import Teacher from '../Teacher/Teacher';
import {useTeacherApi} from '../../hooks/useApi';
import useList from '../../hooks/useList';
import ModelForm from '../../Forms/ModelForm';

const TeacherList = () => {
  const {show, toggleModal, hideModal} = useModal ();
  const {loading, index} = useTeacherApi ();
  const [loaded, setLoaded] = useState (false);

  const {loadItems, items: teachers, prependItem, MoreBtn} = useList ();

  useEffect (
    () => {
      if (!loaded) {
        loadItems (index);
        setLoaded (true);
      }
    },
    [loadItems, index, loaded]
  );

  return (
    <div className="teacherWrapper">
      <Modal onHide={hideModal} show={show}>
        <ModelForm
          onDone={prependItem}
          modelName={{fields: 'teacher', label: 'Teacher', api: 'teachers'}}
        />
      </Modal>
      <div className="teacherHeader">
        <h2>Teachers</h2>
        <button onClick={toggleModal} className="btn">Create Teacher</button>
      </div>

      <div className="teacherList">
        {loading && <div className="teacher">Loading...</div>}
        {teachers.map (t => {
          return <Teacher teacher={t} key={t.id} />;
        })}
      </div>

      <MoreBtn />
    </div>
  );
};

export default TeacherList;
