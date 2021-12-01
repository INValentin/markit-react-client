import React, {useEffect, useState} from 'react';
import {useModuleApi, useStudentApi} from '../../hooks/useApi';
import useList from '../../hooks/useList';
import './ModuleMarks.css';

const ModuleMarks = ({module}) => {
  const {loading, listMarks} = useModuleApi ();
  const {loadItems, items: marks} = useList ();
  const [loaded, setLoaded] = useState (false);

  useEffect (
    () => {
      if (!loaded) {
        loadItems (() => listMarks (module.id));
        setLoaded (true);
      }
    },
    [loaded, listMarks, module, loadItems]
  );

  return (
    <div className="showWrapper marksShowWrapper">
      <h2>{module.name}</h2>
      <button onClick={(e) => setLoaded(false)} className="refreshBtn btn btnSm">
        Rfresh
      </button>
      {loading && <span className="loader" />}
      {!loading && marks.length === 0 ? "No marks yet." : ""}
      {!loading && marks.length ? (
        <div className="marksListWrapper">
          <ModuleMarkTable>
            {marks.map((mark) => {
              return <ModuleMark module={module} mark={mark} key={mark.id} />;
            })}
          </ModuleMarkTable>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export const ModuleMarkTable = ({children}) => {
  return (
    <table className="markTable">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Semester</th>
          <th>Year</th>
          <th>Formative Ass. /50</th>
          <th>Summative Ass. /50</th>
          <th>Total /100</th>
          <th>Decision</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export const ModuleMark = ({mo, mark}) => {
  const [student, setStudent] = useState ({});
  const [loaded, setLoaded] = useState (false);
  const {loading, show} = useStudentApi ();

  useEffect (
    () => {
      if (!loaded) {
        show (mark.student_id).then (async res => {
          const data = await res.json ();
          setStudent (data);
        });
        setLoaded (true);
      }
    },
    [student, mark, show, loaded]
  );

  return loading
    ? <tr className="loader" />
    : <tr>
        <td>{student.name}</td>
        <td>{mark.semester || 0}</td>
        <td>{mark.academic_year || 0}</td>
        <td>{mark.formative || 0}</td>
        <td>{mark.summative || 0}</td>
        <td>{mark.total || 0}</td>
        <td>{mark.decision ? 'Pass' : 'Retake'}</td>
      </tr>;
};
export default ModuleMarks;
