import React from 'react';
import useForm from '../../hooks/useForm';

const Form = ({
  title = 'Fill the form',
  fields: initialFields,
  submitText = 'Send',
}) => {
  const {fields, setValue} = useForm (initialFields);

//   console.log(Object.keys (fields))

  function renderField (key, field) {
    //   console.log({field})
    const mainProps = {field, onChange: v => setValue (key, v)};

    switch (field.type) {
      case 'select':
        return <SelectField key={key} {...mainProps} />;
      default:
        return <NormalField key={key} {...mainProps} />;
    }
  }

  return (
    <form>
      <h2 className="formHeader">{title}</h2>
      {Object.keys ({...fields}).map (key => renderField (key, fields[key]))}

      <button type="button" className="btn formSubmitBtn">{submitText}</button>
    </form>
  );
};

const NormalField = ({field: f, onChange}) => {
  return (
    <div className="inputWrapper">
      <label>{f.label}</label>
      <input
        defaultValue={f.value}
        placeholder={`Enter ${f.label}`}
        type={f.type}
        onChange={e => onChange (e.target.value)}
      />
    </div>
  );
};

const SelectField = ({field: f, onChange}) => {
  const options = typeof f.options === 'function' ? f.options () : f.options;

  return (
    <div className="inputWrapper">
      <label>Select {f.label}</label>
      <select onChange={e => onChange (e.target.value)}>
        {options.map (option => (
          <option key={option.label} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Form;
