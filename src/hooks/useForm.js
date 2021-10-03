import { useState, useEffect } from 'react'

const useForm = (initialFields = {}) => {
    const [data, setData] = useState({})
    const [msg, setMsg] = useState('')
    const [fields, setFields] = useState({  });

    const setValue = (key, value) => {
        setFields({ ...fields, [key]: { ...fields[key], value } })
    }

    const reset = (msg) => {
        if (msg) setMsg(msg)

        const newFields = { ...fields }

        Object.keys(newFields).forEach(key => {
            newFields[key].errors = []
            newFields[key].value = ""
        })
        // console.log(newFields)
        setFields(newFields)
    }

    const errorHandler = data => {
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

        // console.log({newData})
        setData(newData)

    }, [fields])
    

    useEffect(() => {
        setFields({...initialFields})
    }, [initialFields])

    return {
        data,
        fields,
        reset,
        setValue,
        errorHandler
    }
}

export default useForm
