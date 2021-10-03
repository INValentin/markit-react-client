import React from 'react';
import {useDptApi} from '../hooks/useApi';
import fields from './fields';
import Form from './Form/Form';

const DepartmentForm = () => {
  const {loading, store} = useDptApi ();

  const submitHandler = (data, {success, failure}) => {
    console.log(data)
    store (JSON.stringify (data)).then (async res => {
      const data = await res.json ();
      if (!res.ok) {
        return data.errors && failure (data);
      }
      success ('Department created!');
    });
  };

  return (
    <Form
      loading={loading}
      onSubmit={submitHandler}
      title="Department"
      fields={fields.department}
      submitText="Create department"
    />
  );
};

export default DepartmentForm;
