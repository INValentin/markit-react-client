import React, {useEffect, useState} from 'react';
import {useTeacherApi} from '../hooks/useApi';
import {getClone, populateFields} from './fields';
import Form from './Form/Form';

const TeacherForm = ({action = 'Create', onDone, teacher}) => {
  const {loading, store, update} = useTeacherApi ();
  const [fields, setFields] = useState (getClone ('teacher'));
  const [populated, setPopulated] = useState (false);

  const createHandler = (data, {success, failure}) => {
    store (JSON.stringify (data)).then (async res => {
      const data = await res.json ();
      if (!res.ok) {
        return data.errors && failure (data);
      }
      onDone (data);
      success ('Teacher created!');
    });
  };

  const updateHandler = async (data, {success, failure}) => {
    const res = await update (teacher.id, JSON.stringify (data));
    const result = await res.json ();

    if (!res.ok) {
      return failure (result);
    }

    onDone (result);
    // success ('Teacher updated!');
  };

  useEffect (
    () => {
      const canPopulate = typeof teacher === 'object' && !populated;
      if (!canPopulate) return undefined;
      const newFields = populateFields (teacher, fields);
      setFields(newFields)
      setPopulated (true);
    },
    [teacher, populated, fields]
  );

  return (
    <Form
      loading={loading}
      onSubmit={
        action.toLowerCase () === 'create' ? createHandler : updateHandler
      }
      title="Teacher"
      fields={fields}
      submitText={'Teacher ' + action}
    />
  );
};

export default TeacherForm;
