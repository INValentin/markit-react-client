import React from 'react';
import fields from './fields';
import Form from './Form/Form';

const MarksForm = () => {
  return (
    <Form title="Marks" fields={fields.marks} submitText="Record marks" />
  );
};

export default MarksForm;
