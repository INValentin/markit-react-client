import React, { useEffect, useState } from "react";
import "./ModuleList.css";

import Modal, { useModal } from "../Modal/Modal";
import Module from "../Module/Module";
import { useModuleApi } from "../../hooks/useApi";
import useList from "../../hooks/useList";
import ModelForm from "../../Forms/ModelForm";
import AuthAdmin from "../AuthAdmin/AuthAdmin";

const ModuleList = () => {
  const { show, toggleModal, hideModal } = useModal();
  const { loading, index } = useModuleApi();
  const {
    loadItems,
    items: modules,
    changeItem,
    removeItem,
    prependItem,
    MoreBtn,
  } = useList();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      loadItems(index);
      setLoaded(true);
    }
  }, [index, loadItems, loaded]);

  const createdHandler = (newItem) => {
    hideModal();
    prependItem(newItem);
  };

  return (
    <div className="moduleWrapper">
      <AuthAdmin>
        <Modal onHide={hideModal} show={show}>
          <ModelForm onDone={createdHandler} modelName="module" />
        </Modal>
      </AuthAdmin>
      <div className="moduleHeader">
        <h2 className="moduleHeader">Modules</h2>
        <AuthAdmin>
          <button onClick={toggleModal} className="btn">
            Create Module
          </button>
        </AuthAdmin>
      </div>
      <div className="moduleList">
        {loading && (
          <div className="module">
            <span className="loader" />
          </div>
        )}
        {!loading && !modules.length && <p>No modules found</p>}
        {modules.map((mod) => (
          <Module
            onDelete={removeItem}
            onUpdate={(data) => changeItem(mod, data)}
            module={mod}
            key={mod.name}
          />
        ))}
      </div>
      <MoreBtn />
    </div>
  );
};

export default ModuleList;
