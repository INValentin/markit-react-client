import React, { useEffect, useState } from "react";
import Form from "../../Forms/Form/Form";
import ModelForm from "../../Forms/ModelForm";
import allFields from "../../Forms/fields";
import { useStudentApi } from "../../hooks/useApi";
import useForm from "../../hooks/useForm";
import useList from "../../hooks/useList";
// import Hide from "../Hide/Hide";
import "./RecordStudentMarks.css";

const RecordStudentMarks = ({ student }) => {
  const { loadItems, items: modules, MoreBtn } = useList();
  const { listModules, loading } = useStudentApi();
  const [loaded, setLoaded] = useState(false);
  const myFields = {
    academic_year: allFields.marks.academic_year,
    semester: allFields.marks.semester,
  };

  const { data: fieldsData, setValue, setAttr, fields } = useForm("", myFields);

  useEffect(() => {
    if (!loaded) {
      loadItems(() => listModules(student.id));
      setLoaded(true);
    }
  }, [student, listModules, loadItems, loaded]);

  useEffect(() => {
    // console.log({fieldsData})
  }, [fieldsData]);

  return (
    <div className="showWrapper showRecordMarks">
      <h2 className="showHeader">Record Marks for '{student.name}'</h2>
      {loading && <div className="loader"></div>}
      {!loading && loaded && modules.length === 0 && (
        <div>No modules found.</div>
      )}
      {modules.length > 0 && (
        <>
          <form action="" className="defaultsForm">
            <Form fields={fields} setValue={setValue} setAttr={setAttr}></Form>
          </form>
          <div className="recordMarksModuleList">
            {modules.map((mod) => (
              <RecordStudentModuleMarks
                globalData={fieldsData}
                student={student}
                module={mod}
                key={mod.id}
              />
            ))}
          </div>
        </>
      )}

      <MoreBtn />
    </div>
  );
};

export default RecordStudentMarks;

const RecordStudentModuleMarks = ({ globalData, student, module: mod }) => {
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
        {mod.name}
      </div>
      { showForm &&
        <div>
          <ModelForm
            action="create"
            defaults={defaults}
            // onDone={(data) => onCreate && onCreate(data)}
            modelName={{ label: "", fields: "recordMarks", api: "marks" }}
          />
          <div
            onClick={() => setShowForm(false)}
            className="closeBtn"
            dangerouslySetInnerHTML={{ __html: "&times" }}
          ></div>
        </div>
      }
    </div>
  );
};
