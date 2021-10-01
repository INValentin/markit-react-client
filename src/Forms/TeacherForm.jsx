import React from 'react';
import { useTeacherApi } from '../hooks/useApi';
import fields from './fields';
import Form from './Form/Form';

const TeacherForm = () => {
    const { loading, store } = useTeacherApi()

  const submitHandler = (data, {success, failure}) => {
    store (JSON.stringify (data)).then (async res => {
      const data = await res.json ();
      if (!res.ok) {
        return data.errors && failure (data);
      }
      success ('Teacher created!');
    });
  };

  return (
    <Form
      loading={loading}
      onSubmit={submitHandler}
      title="Teacher"
      fields={fields.teacher}
      submitText="Create Teacher"
    />
  );
};

export default TeacherForm;
