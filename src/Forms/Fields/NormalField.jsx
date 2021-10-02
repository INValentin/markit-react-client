import React from 'react';

const NormalField = ({field: f, onChange}) => {
  return (
    <React.Fragment>
      <label>{f.label}</label>
      <input
        defaultValue={f.value}
        placeholder={`Enter ${f.label}`}
        type={f.type}
        onChange={e => onChange (e.target.value)}
      />
    </React.Fragment>
  );
};

export default NormalField;
