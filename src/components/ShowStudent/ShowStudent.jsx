import React, { useEffect, useState } from 'react';
import { useDptApi } from '../../hooks/useApi';
import DetailList from '../DetailList/DetailList';

const ShowStudent = ({student, onUpdate}) => {
  const {loading: dptLoading, show: showDpt} = useDptApi ();
  const [details, setDetails] = useState({})
  const [dptLoaded, setDptLoaded] = useState (false);


  useEffect (
    () => {
      if (!dptLoaded) {
        showDpt (student.foculty_id).then (async res => {
          const data = await res.json ();
          const dptData = {tags: [{name: data.name}]};
          setDetails (details => ({...details, department: dptData}));
        });
        setDptLoaded (true);
      }
    },
    [dptLoaded, showDpt, student]
  );

  return (
    <div className="showWrapper">
      <h2 className="showHeader">{student.name}</h2>
      {!dptLoading && <DetailList details={details} />}
      {dptLoading && <span className="loader"></span> }
      <h4 className="actionsHeader">Actions</h4>
      <div className="actionsWrapper">
        <div className="actionsList">
          <button onClick={() => onUpdate && onUpdate()} className="actionBtn btnSuccess btn">Update</button>
          <button className="actionBtn btnDanger btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ShowStudent;
