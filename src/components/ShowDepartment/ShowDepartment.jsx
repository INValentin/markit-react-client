import React, { useEffect, useState } from "react";
import { useDptApi } from "../../hooks/useApi";
// import useList from "../../hooks/useList";
import AuthAdmin from "../AuthAdmin/AuthAdmin";
import DetailList from "../DetailList/DetailList";

const ShowDepartment = ({ department, onDelete, onUpdate }) => {
  const { loading: modLoading, listModules } = useDptApi();
  const [modLoaded, setModLoaded] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    if (!modLoaded) {
      listModules(department.id).then(async (res) => {
        const data = await res.json();
        let moduleData = data.data.map((item) => {
          return { name: item.name };
        });
        moduleData = moduleData.length ? { modules: { tags: moduleData } } : {};
        setDetails((details) => ({ ...details, ...moduleData }));
      });
      setModLoaded(true);
    }
  }, [department, modLoaded, listModules]);

  return (
    <div className="showWrapper">
      <h2 className="showHeader">{department.name}</h2>
      {!modLoading && <DetailList details={details} />}
      {modLoading && <span className="loader"></span>}
      <AuthAdmin>
        <div className="actionsWrapper">
          <h4 className="actionsHeader">Actions</h4>
          <div className="actionsList">
            <button
              onClick={() => onUpdate && onUpdate()}
              className="actionBtn btnSuccess btn"
            >
              Update
            </button>
            <button
              onClick={() => onDelete && onDelete()}
              className="actionBtn btnDanger btn"
            >
              Delete
            </button>
          </div>
        </div>
      </AuthAdmin>
    </div>
  );
};

export default ShowDepartment;
