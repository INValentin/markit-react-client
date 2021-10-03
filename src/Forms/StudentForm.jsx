import React from 'react';
import fields from './fields';
import Form from './Form/Form';
import {useStudentApi} from '../hooks/useApi';

const StudentForm = () => {
  const {loading, store} = useStudentApi ();

  const submitHandler = async (data, {success, failure}) => {
      console.log(data)
    store (JSON.stringify(data))
      .then (async res => {
        const data = await res.json ();
        if (!res.ok) {
          return data.errors && failure (data);
        }
        success ('Student created!');
      })
  };

  return (
    <Form
      loading={loading}
      onSubmit={submitHandler}
      fields={fields.student}
      title="Student"
      submitText="Create student"
    />
  );
};

export default StudentForm;
