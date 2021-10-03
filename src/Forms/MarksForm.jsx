import React from 'react';
import { useMarksApi } from '../hooks/useApi';
import fields from './fields';
import Form from './Form/Form';

const MarksForm = () => {
  const { loading, store } = useMarksApi()
  
  const submitHandler = (data, {success, failure}) => {
    store (JSON.stringify (data)).then (async res => {
      const data = await res.json ();
      if (!res.ok) {
        console.log(data)
        return data.errors && failure (data);
      }
      success ('Teacher created!');
    });
  };

  return (
    <Form
      loading={loading}
      title="Marks"
      onSubmit={submitHandler}
      fields={fields.marks}
      submitText="Record marks"
    />
  );
};

export default MarksForm;
