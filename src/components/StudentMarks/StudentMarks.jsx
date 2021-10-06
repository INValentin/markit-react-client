import React, {useEffect, useState} from 'react';
import {useStudentApi, useModuleApi} from '../../hooks/useApi';
import useList from '../../hooks/useList';
import './StudentMarks.css';

const StudentMarks = ({student}) => {
  const {loading, listMarks} = useStudentApi ();
  const {loadItems, items: marks} = useList ();
  const [loaded, setLoaded] = useState (false);

  useEffect (
    () => {
      if (!loaded) {
        loadItems (() => listMarks (student.id));
        setLoaded (true);
      }
    },
    [loaded, listMarks, student, loadItems]
  );

  return (
    <div className="showWrapper marksShowWrapper">
      <h2>{student.name}</h2>
      {loading && <span className="loader" />}
      {!loading && marks.length === 0 ? 'No marks yet.' : ''}
      {!loading && marks.length
        ? <div className="marksListWrapper">
            <StudentMarkTable>
              {marks.map (mark => {
                return (
                  <StudentMark student={student} mark={mark} key={mark.id} />
                );
              })}
            </StudentMarkTable>
          </div>
        : ''}
    </div>
  );
};

export const StudentMarkTable = ({children}) => {
  return (
    <table className="markTable">
      <thead>
        <tr>
          <th>Module Code</th>
          <th>Module Name</th>
          <th>Semester</th>
          <th>Year</th>
          <th>Credits</th>
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

export const StudentMark = ({student, mark}) => {
  const [module, setModule] = useState ({});
  const [loaded, setLoaded] = useState (false);
  const {loading, show} = useModuleApi ();

  useEffect (
    () => {
      if (!loaded) {
        show (mark.module_id).then (async res => {
          const data = await res.json ();
          setModule (data);
        });
        setLoaded (true);
      }
    },
    [module, mark, show, loaded]
  );

  return loading
    ? <tr className="loader" />
    : <tr>
        <td>{module.code}</td>
        <td>{module.name}</td>
        <td>{mark.semester || 0}</td>
        <td>{mark.academic_year || 0}</td>
        <td>{module.credits || 0}</td>
        <td>{mark.formative || 0}</td>
        <td>{mark.summative || 0}</td>
        <td>{mark.total || 0}</td>
        <td>{mark.decision ? 'Pass' : 'Retake'}</td>
      </tr>;
};

export default StudentMarks;
