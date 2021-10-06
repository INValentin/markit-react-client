import { useState, useEffect } from 'react'
import { getClone } from '../Forms/fields';
import useApi from './useApi';

const useForm = (modelName) => {
    const [data, setData] = useState({})
    const [msg, setMsg] = useState('')
    const [fields, setFields] = useState(getClone(modelName.fields));
    const { loading, store, update: apiUpdate } = useApi(modelName.api)

    const setValue = (key, value) => {
        setFields({ ...fields, [key]: { ...fields[key], value } })
    }

    const send = async (callback) => {
        const res = await callback(JSON.stringify(data))
        const apiData = await res.json()
        if (!res.ok) {
            errorHandler(apiData)
        }
        return Promise.resolve(apiData)
    }

    const create = async () => {
        return send(store)
    }

    const update = (id) => {
        return async () => send(data => apiUpdate(id, data))
    }

    const populateFields = (instance) => {
        const newFields = { ...fields };
        Object.keys(newFields).forEach(k => {
            if (k in instance) {
                newFields[k].value = instance[k] || "";
            } else {
                delete newFields[k];
            }
        });
        setFields(newFields);
    };

    const reset = () => {
        const newFields = { ...fields }

        Object.keys(newFields).forEach(key => {
            newFields[key].errors = []
            newFields[key].value = ""
        })

        setFields(newFields)
    }

    function errorHandler(data) {
        if (data.message) setMsg(data.message)
        const newFields = { ...fields }

        if (data.errors) {
            Object.keys(newFields).forEach(k => {
                newFields[k].errors = data.errors[k] || []
            })
        }
        setFields(newFields)
    }

    useEffect(() => {
        const newData = {}

        Object.keys(fields).forEach(k => {
            newData[k] = fields[k].value
        })

        setData(newData)

    }, [fields])


    // useEffect(() => {
    //     setFields({ ...initialFields })
    // }, [initialFields])

    return {
        msg,
        data,
        fields,
        loading,
        send,
        create,
        update,
        populateFields,
        reset,
        setValue,
        errorHandler
    }
}

export default useForm
