import React, {useState, useEffect} from 'react';
import {useTeacherApi} from '../../hooks/useApi';
import DetailList from '../DetailList/DetailList';
import './ShowTeacher.css';

const ShowTeacher = ({teacher, onUpdate, onDelete}) => {
  const [details, setDetails] = useState ({});
  const {loading, listModules} = useTeacherApi ();
  const [loaded, setLoaded] = useState (false);

  useEffect (
    () => {
      if (!loaded) {
        listModules(teacher.id)
        .then(async res => {
          const data = await res.json()
          let moduleData = data.data.map(item => {
            return { name: item.name }
          })
          moduleData = moduleData.length ? { modules: { tags: moduleData } } : {}
          setDetails(details => ({ ...details, ...moduleData }))
        })
        setLoaded (true);
      }
    },
    [teacher, loaded, listModules]
  );


  return (
    <div className="showWrapper">
      <h2 className="showHeader">{teacher.name}</h2>
      { loading && <span className="loader"></span> }
      {!loading && <DetailList details={details} />}
      <h4 className="actionsHeader">Actions</h4>
      <div className="actionsWrapper">
        <div className="actionsList">
          <button onClick={e => onUpdate && onUpdate()} className="actionBtn btnSuccess btn">Update</button>
          <button onClick={e => onDelete && onDelete()} className="actionBtn btnDanger btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ShowTeacher;