import React, { useEffect, useState } from 'react';
import { useDptApi, useTeacherApi } from '../../hooks/useApi';
import DetailList from '../DetailList/DetailList';

const ShowModule = ({module, onUpdate, onDelete}) => {
    const { loading:teacherLoading, show:showTeacher } = useTeacherApi()
    const { loading:dptLoading, show: showDpt } = useDptApi()
    const [teacherLoaded, setTeacherLoaded] = useState(false)
    const [dptLoaded, setDptLoaded] = useState(false)
    const [details, setDetails] = useState({})

    useEffect(() => {
        if (!teacherLoaded) {
            showTeacher(module.teacher_id)
            .then(async res => {
                const data = await res.json()
                const teacherData = { tags: [{ name: data.name }] }
                setDetails(details => ({ ...details, teacher: teacherData }))
            })
            setTeacherLoaded(true)
        }
    }, [teacherLoaded, showTeacher, module])

    useEffect(() => {
        if (!dptLoaded) {
            showDpt(module.foculty_id)
            .then(async res => {
                const data = await res.json()
                const dptData = { tags: [{ name: data.name }] }
                setDetails(details => ({ ...details, department: dptData }))
            })
            setDptLoaded(true)
        }
    }, [dptLoaded, showDpt, module])

  return (
    <div className="showWrapper">
      <h2 className="showHeader">{module.name}</h2>
      {!(teacherLoading || dptLoading) && <DetailList details={details} />}
      { (teacherLoading || dptLoading) && <span className="loader"></span> }
      <h4 className="actionsHeader">Actions</h4>
      <div className="actionsWrapper">
        <div className="actionsList">
          <button onClick={() => onUpdate && onUpdate()} className="actionBtn btnSuccess btn">Update</button>
          <button onClick={() => onDelete && onDelete()} className="actionBtn btnDanger btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ShowModule;
