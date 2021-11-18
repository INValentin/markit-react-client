import React, {useEffect, useState} from 'react';
import useForm from '../hooks/useForm';
import Form from './Form/Form';

const ModelForm = ({modelName, onDone, action = 'Create', instance, defaults = {}}) => {
  if (typeof modelName === 'string') {
    modelName = {
      label: modelName[0].toUpperCase () + modelName.slice(1).toLowerCase(),
      fields: modelName.toLowerCase (),
      api: modelName.toLowerCase () + 's',
    };
  }
  const {setValue, setError, setAttr, loading, fields, create, update, apiMethod, populateFields} = useForm (
    modelName,
    {},
    defaults
  );
  const [populated, setPopulated] = useState (false);

  useEffect (
    () => {
      if (instance && !populated) {
        populateFields (instance);
        setPopulated (true);
      }
    },
    [instance, populateFields, populated]
  );

  const actionHandler = async () => {
    const handler = action.toLocaleLowerCase () === 'create'
      ? create
      : (
        action.toLocaleLowerCase () === 'update' ? update (instance.id) : (
          apiMethod(api => body => api[action](instance.id, body))
        )
        );

    const data = await handler ();
    if (!data.errors) {
      onDone && onDone (data);
    }
  };

  const submitHandler = e => {
    e.preventDefault ();
    actionHandler ();
  };


  useEffect(() => console.log(fields), [fields])

  return (
    <form>
      <h2 className="formHeader">{modelName.label}</h2>
      <Form setAttr={setAttr} setError={setError} setValue={setValue} fields={fields} />
      <button className="btn formSubmitBtn" onClick={submitHandler}>
        {!loading ? `${action} ${modelName.label}` : '...'}
      </button>
    </form>
  );
};

export default ModelForm;
