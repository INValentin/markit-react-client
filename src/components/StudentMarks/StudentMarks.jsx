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

export const StudentMarkTable = ({children, headers}) => {
  return (
    <table className="markTable">
      <thead>
        <tr>
          {headers}
          <th title="Module code">Mod. Code</th>
          <th title="Module name">Mod. Name</th>
          <th title="Semester">Sem</th>
          <th title="Academic year">Year</th>
          <th title="Module credits">Credits</th>
          <th title="Formative assessment">Form. Ass.<small><i>/50</i></small> </th>
          <th title="Summative assessment">Sum. Ass. <small><i>/50</i></small></th>
          <th title="Total marks">Tot. <small><i>/100</i></small></th>
          <th title="Decision">Decision</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export const StudentMark = ({student, mark, Data}) => {
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
        {Data}
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
