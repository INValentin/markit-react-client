import React, {useEffect, useState} from 'react';
import useForm from '../hooks/useForm';
import Form from './Form/Form';

const ModelForm = ({modelName, onDone, action = 'Create', instance}) => {
  if (typeof modelName === 'string') {
    modelName = {
      label: modelName[0].toUpperCase () + modelName.slice(1).toLowerCase(),
      fields: modelName.toLowerCase (),
      api: modelName.toLowerCase () + 's',
    };
  }
  const {setValue, loading, fields, create, update, populateFields} = useForm (
    modelName
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
      : update (instance.id);

    const data = await handler ();
    onDone && onDone (data);
  };

  const submitHandler = e => {
    e.preventDefault ();
    actionHandler ();
  };

  return (
    <form>
      <h2 className="formHeader">{modelName.label}</h2>
      <Form setValue={setValue} fields={fields} />
      <button className="btn formSubmitBtn" onClick={submitHandler}>
        {!loading ? `${action} ${modelName.label}` : '...'}
      </button>
    </form>
  );
};

export default ModelForm;
