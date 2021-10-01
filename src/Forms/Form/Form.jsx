import React from 'react';
import useForm from '../../hooks/useForm';

const Form = ({
  loading,
  title = 'Fill the form',
  fields: initialFields,
  submitText = 'Send',
  onSubmit,
}) => {
  const {msg, data, fields, setValue, reset, errorHandler} = useForm (initialFields);

  //   console.log(Object.keys (fields))

  function submitHandler (e) {
    e.preventDefault ();
    onSubmit && onSubmit (data, {success: reset, failure: errorHandler});
  }

  function renderField (key, field) {
    //   console.log({field})
    const mainProps = {field, onChange: v => setValue (key, v)};

    switch (field.type) {
      case 'select':
        return <SelectField {...mainProps} />;
      default:
        return <NormalField {...mainProps} />;
    }
  }

  return (
    <form>
      <h2 className="formHeader">{title}</h2>
      { msg && <h5 style={{margin: '.15rem 0', textAlign: 'center'}}>{msg}</h5> }
      {Object.keys ({...fields}).map (key => {
        return (
          <div key={key} className={`${Boolean(fields[key].errors.length) ? 'error' : ''} inputWrapper`}>
            {renderField (key, fields[key])}
            {Boolean(fields[key].errors.length) &&
              <div className="errorWrapper">
                {fields[key].errors.map (err => {
                  return <div key={err} className="error">{err}</div>;
                })}
              </div>}
          </div>
        );
      })}

      <button
        disabled={loading ? true : false}
        onClick={submitHandler}
        type="submit"
        className="btn formSubmitBtn"
      >
        {!loading ? submitText : '...'}
      </button>
    </form>
  );
};

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

const SelectField = ({field: f, onChange}) => {
  const options = typeof f.options === 'function' ? f.options () : f.options;

  return (
    <React.Fragment>
      <label>Select {f.label}</label>
      <select onChange={e => onChange (e.target.value)}>
        {options.map (option => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default Form;
