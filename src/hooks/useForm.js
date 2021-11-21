import { useState, useEffect } from "react";
import { getClone } from "../Forms/fields";
import useApi from "./useApi";

const useForm = (modelName = {}, intialFields = {}, defaults = {}) => {
  const [data, setData] = useState({});
  const [msg, setMsg] = useState("");
  const [defaultsSet, setDefaultsSet] = useState(false)
  const [fields, setFields] = useState(
    getClone(modelName?.fields || "") || intialFields
  );
  const [initialData, setInitialData] = useState({})

  const api = useApi(modelName?.api || "");

  const { loading, store, update: apiUpdate } = api;

  const setValue = (key, value) => {
    setFields({ ...fields, [key]: { ...fields[key], value } });
  };

  const send = async (callback, canReset = true) => {
    const res = await callback(JSON.stringify(data));
    const apiData = await res.json();
    if (!res.ok) {
      errorHandler(apiData);
    } else {
      setMsg("Action Completed!");
      if (canReset) {
        reset();
      }
    }
    return Promise.resolve(apiData);
  };

  const apiMethod = (callback, canReset = true) => {
    return () => send((body) => callback(api)(body), canReset);
  };

  const create = async () => {
    const data = await send(store);
    return Promise.resolve(data);
  };

  const setError = (key, error) => {
    setFields({
      ...fields,
      [key]: { ...fields[key], errors: [...fields[key].errors].push(error) },
    });
  };

  const update = (id) => {
    return async () => send((data) => apiUpdate(id, data));
  };

  const populateFields = (instance) => {
    const newFields = { ...fields };
    Object.keys(newFields).forEach((k) => {
      if (k in instance) {
        newFields[k].value = instance[k] || "";
      } else {
        delete newFields[k];
      }
    });
    setFields(newFields);
  };

  const reset = () => {
    const newFields = { ...fields };

    Object.keys(newFields).forEach((key) => {
      newFields[key].errors = [];
      newFields[key].value = "";
    });

    setFields(newFields);
  };

  const setAttr = (key, attr, value) => {
    setFields({ ...fields, [key]: { ...fields[key], [attr]: value } });
  };

  function errorHandler(data) {
    // if (data.message) setMsg(data.message);
    const newFields = { ...fields };

    if (data.errors) {
      Object.keys(newFields).forEach((k) => {
        newFields[k].errors = data.errors[k] || [];
      });
    }
    setFields(newFields);
  }

  useEffect(() => {
    const newData = {};

    Object.keys(fields).forEach((k) => {
      newData[k] = fields[k].value;
    });

    setData(newData);
  }, [fields]);
  
  
  useEffect(() => {
    if (defaultsSet) return undefined

    const newFields = {...fields}

    Object.keys(defaults).forEach((k) => {
      newFields[k]['value'] = defaults[k]
    }); 

    setFields(newFields);
    setDefaultsSet(true);
  }, [defaultsSet, defaults, initialData, fields]);

  useEffect(() => {
    if (Object.entries(defaults).some(([k,v]) => v !== initialData[k])) {
      setInitialData({...defaults})
      setDefaultsSet(false)
    }
  }, [defaults, initialData])


  return {
    msg,
    data,
    fields,
    loading,
    send,
    create,
    update,
    apiMethod,
    populateFields,
    reset,
    setValue,
    setError,
    setMsg,
    errorHandler,
    setAttr,
  };
};

export default useForm;
