import React, { useEffect, useState } from "react";
import ModelForm from "../../Forms/ModelForm";
import { useModuleApi } from "../../hooks/useApi";
import useList from "../../hooks/useList";
import Hide from "../Hide/Hide";
import "./RecordModuleMarks.css";

const RecordModuleMarks = ({ module }) => {
  const { loadItems, items: students } = useList();
  const { listStudents, loading } = useModuleApi();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      loadItems(() => listStudents(module.id));
      setLoaded(true);
    }
  }, [module, listStudents, loadItems, loaded]);

  return (
    <div className="showWrapper showRecordMarks">
      <h2 className="showHeader">Record Marks for '{module.name}'</h2>
      {loading && <div className="loader"></div>}
      {!loading && loaded && students.length === 0 && (
        <div>No students found.</div>
      )}

      <div className="recordMarksModuleList">
        {students.map((student) => (
          <RecordModuleStudentMarks
            module={module}
            student={student}
            key={student.id}
          />
        ))}
      </div>
    </div>
  );
};

export default RecordModuleMarks;

const RecordModuleStudentMarks = ({ module, student }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="recordMarksModule">
      <div
        onClick={() => setShowForm((s) => !s)}
        className="recordMarksModuleName"
      >
        {student.name}
      </div>
      <Hide show={showForm}>
        <ModelForm
          defaults={{ student_id: student.id, module_id: module.id }}
          action="create"
          modelName={{ label: "", fields: "recordMarks", api: "marks" }}
        />
        <div
          onClick={() => setShowForm(false)}
          className="closeBtn"
          dangerouslySetInnerHTML={{ __html: "&times" }}
        ></div>
      </Hide>
    </div>
  );
};
