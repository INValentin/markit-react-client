import React, { useEffect, useState } from "react";
import ModelForm from "../../Forms/ModelForm";
import { useStudentApi } from "../../hooks/useApi";
import useList from "../../hooks/useList";
import Hide from "../Hide/Hide";
import "./RecordStudentMarks.css";

const RecordStudentMarks = ({ student }) => {
  const { loadItems, items: modules } = useList();
  const { listModules, loading } = useStudentApi();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      loadItems(() => listModules(student.id));
      setLoaded(true);
    }
  }, [student, listModules, loadItems, loaded]);

  return (
    <div className="showWrapper showRecordMarks">
      <h2 className="showHeader">Record Marks for '{student.name}'</h2>
      {loading && <div className="loader"></div>}
      {!loading && loaded && modules.length === 0 && (
        <div>No modules found.</div>
      )}

      <div className="recordMarksModuleList">
        {modules.map((mod) => (
          <RecordStudentModuleMarks
            student={student}
            module={mod}
            key={mod.id}
          />
        ))}
      </div>
    </div>
  );
};

export default RecordStudentMarks;

const RecordStudentModuleMarks = ({ student, module: mod }) => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="recordMarksModule">
      <div onClick={() => setShowForm(s => !s)} className="recordMarksModuleName">{mod.name}</div>
      <Hide show={showForm}>
          <ModelForm
            action="create"
            defaults={{student_id: student.id, module_id: mod.id}}
            //   instance={student}
            // onDone={(data) => onCreate && onCreate(data)}
            modelName={{ label: "", fields: "recordMarks", api: "marks" }}
          />
          <div onClick={() => setShowForm(false)} className="closeBtn" dangerouslySetInnerHTML={{__html: "&times"}}></div>
      </Hide>
    </div>
  );
};
