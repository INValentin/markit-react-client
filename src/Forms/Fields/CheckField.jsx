import React from 'react';

const CheckField = ({field: f, onChange}) => {
  const fieldId = Math.random ();
  return (
    <React.Fragment>
      <label htmlFor={fieldId}>{f.label}</label>
      <input
        id={fieldId}
        value={f.value}
        defaultChecked={f.value ? true : false}
        placeholder={`Enter ${f.label}`}
        type={f.type}
        onChange={e => onChange (e.target.checked)}
      />
    </React.Fragment>
  );
};

export default CheckField;
