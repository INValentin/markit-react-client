import { useState, useEffect } from 'react'

const useForm = (initialFields = {}) => {
    const [data, setData] = useState({})
    const [msg, setMsg] = useState('')
    const [fields, setFields] = useState({ ...initialFields });

    const setValue = (key, value) => {
        setFields({ ...fields, [key]: { ...fields[key], value } })
    }

    const reset = (message) => {
        const newFields = { ...fields }
        Object.keys(newFields).forEach(k => {
            newFields[k].errors = []
            newFields[k].value = ""
        })
        if (message) {
            setMsg(message)
        }
        setFields(newFields)
    }

    const errorHandler = data => {
        if (!data.errors) return
        const newFields = { ...fields }
        Object.keys(newFields).forEach(k => {
            newFields[k].errors = data.errors[k] || []
        })
        data.message && setMsg(data.msg)
        setFields(newFields)
    }

    useEffect(() => {
        const fieldData = {}
        Object.entries(fields).forEach(([k, v]) => {
            fieldData[k] = v['value']
        })
        setData(fieldData)
    }, [fields])

    return {
        msg,
        data,
        fields,
        reset,
        errorHandler,
        setValue,
        setMsg
    }
}

export default useForm
