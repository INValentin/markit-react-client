import React, { useEffect, useState } from "react";
import ModelForm from "../../Forms/ModelForm";
import allFields from "../../Forms/fields";
import { useModuleApi } from "../../hooks/useApi";
import useList from "../../hooks/useList";
// import Hide from "../Hide/Hide";
import "./RecordModuleMarks.css";
import useForm from "../../hooks/useForm";
import Form from "../../Forms/Form/Form";
import Hide from "../Hide/Hide";

const RecordModuleMarks = ({ module }) => {
  const { loadItems, items: students, MoreBtn } = useList();
  const { listStudents, loading } = useModuleApi();
  const [loaded, setLoaded] = useState(false);

  const myFields = {
    academic_year: allFields.marks.academic_year,
    semester: allFields.marks.semester,
  };

  const { data: fieldsData, setValue, setAttr, fields } = useForm("", myFields);

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
      {students.length > 0 && (
        <>
          <form action="" className="defaultsForm">
            <Form fields={fields} setValue={setValue} setAttr={setAttr}></Form>
          </form>
          <div className="recordMarksModuleList">
            {students.map((student) => (
              <RecordModuleStudentMarks
                globalData={fieldsData}
                module={module}
                student={student}
                key={student.id}
              />
            ))}
          </div>
        </>
      )}
      <MoreBtn />
    </div>
  );
};

export default RecordModuleMarks;

const RecordModuleStudentMarks = ({ globalData, module: mod, student }) => {
  const [showForm, setShowForm] = useState(false);
  const [defaults, setDefaults] = useState({});

  useEffect(() => {
    setDefaults((df) => ({ ...df, student_id: student.id, module_id: mod.id }));
  }, [student, mod]);

  useEffect(() => {
    setDefaults((df) => ({ ...df, ...globalData }));
  }, [globalData]);

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
          defaults={defaults}
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
