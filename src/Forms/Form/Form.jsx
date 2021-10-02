import React from 'react';

import useForm from '../../hooks/useForm';
import { SelectField, NormalField } from '../Fields/index'


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


export default Form;
