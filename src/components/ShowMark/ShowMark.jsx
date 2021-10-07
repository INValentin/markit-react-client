import React, {useEffect, useState} from 'react';
import {useStudentApi} from '../../hooks/useApi';
import { StudentMark } from '../StudentMarks/StudentMarks';
import './ShowMark.css';

const ShowMark = ({mark}) => {
  const {loading, show: showStudent} = useStudentApi ();
  const [student, setStudent] = useState ({});
  const [loaded, setLoaded] = useState (false);

  useEffect (
    () => {
      if (!loaded) {
        showStudent (mark.student_id).then (async res => {
          const data = await res.json ();
          setStudent (data);
        });
        setLoaded (true);
      }
    },
    [loaded, showStudent, mark]
  );

  return loading
    ? <tr className="loader" />
    : loaded && <React.Fragment>
        <StudentMark Data={<td>{student.name}</td>} student={student} mark={mark} key={mark.id} />
    </React.Fragment>
};

export default ShowMark;
