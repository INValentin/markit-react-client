import React from 'react';

import {SelectField, NormalField} from '../Fields/index';

const Form = ({
  fields,
  setValue,
}) => {
  function renderField (key, field) {
    const mainProps = {field, onChange: v => setValue (key, v)};

    switch (field.type) {
      case 'select':
        return <SelectField {...mainProps} />;
      default:
        return <NormalField {...mainProps} />;
    }
  }

  return (
    <div className="fieldsWrapper">
      {Object.keys ({...fields}).map (key => {
        return (
          <div
            key={key}
            className={`${Boolean (fields[key].errors.length) ? 'error' : ''} inputWrapper`}
          >
            {renderField (key, fields[key])}
            {Boolean (fields[key].errors.length) &&
              <div className="errorWrapper">
                {fields[key].errors.map (err => {
                  return <div key={err} className="error">{err}</div>;
                })}
              </div>}
          </div>
        );
      })}
    </div>
  );
};

export default Form;
