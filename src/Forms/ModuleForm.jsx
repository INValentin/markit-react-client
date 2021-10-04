import React from 'react';
import {useModuleApi} from '../hooks/useApi';
import fields from './fields';
import Form from './Form/Form';

const ModuleForm = ({onDone}) => {
  const {loading, store} = useModuleApi ();

  const submitHandler = (data, { success, failure }) => {
    store (JSON.stringify(data)).then (async res => {
        const data = await res.json()
        if (res.ok) {
            onDone(data)
            return success("Module created!")
        }
        failure(data)
    });
  };

  return (
    <Form
      loading={loading}
      title="Module"
      onSubmit={submitHandler}
      fields={fields.module}
      submitText="Create Module"
    />
  );
};

export default ModuleForm;
