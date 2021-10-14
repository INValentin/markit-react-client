import React, { useEffect, useState } from "react";
import "./TeacherList.css";

import Modal, { useModal } from "../Modal/Modal";
// import {TeacherForm} from '../../Forms';
import Teacher from "../Teacher/Teacher";
import { useTeacherApi } from "../../hooks/useApi";
import useList from "../../hooks/useList";
import ModelForm from "../../Forms/ModelForm";
import AuthAdmin from "../AuthAdmin/AuthAdmin";

const TeacherList = () => {
  const { show, toggleModal, hideModal } = useModal();
  const { loading, index } = useTeacherApi();
  const [loaded, setLoaded] = useState(false);

  const {
    loadItems,
    items: teachers,
    changeItem,
    removeItem,
    prependItem,
    MoreBtn,
  } = useList();

  useEffect(() => {
    if (!loaded) {
      loadItems(index);
      setLoaded(true);
    }
  }, [loadItems, index, loaded]);

  const createdHandler = (newItem) => {
    hideModal();
    prependItem(newItem);
  };

  return (
    <div className="teacherWrapper">
      <AuthAdmin>
        <Modal onHide={hideModal} show={show}>
          <ModelForm
            onDone={createdHandler}
            modelName={{ fields: "teacher", label: "Teacher", api: "teachers" }}
          />
        </Modal>
      </AuthAdmin>
      <div className="teacherHeader">
        <h2>Teachers</h2>
        <AuthAdmin>
          <button onClick={toggleModal} className="btn">
            Create Teacher
          </button>
        </AuthAdmin>
      </div>

      <div className="teacherList">
        {loading && (
          <div className="teacher">
            <span className="loader" />
          </div>
        )}
        {!loading && !teachers.length && <p>No teachers found</p>}
        {teachers.map((t) => {
          return (
            <Teacher
              onDelete={removeItem}
              onUpdate={(data) => changeItem(t, data)}
              teacher={t}
              key={t.id}
            />
          );
        })}
      </div>

      <MoreBtn />
    </div>
  );
};

export default TeacherList;
