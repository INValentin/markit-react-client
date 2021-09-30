import { useState } from 'react'

const useForm = (initialFields = {}) => {
    const [fields, setFields] = useState({ ...initialFields });

    const setValue = (key, value) => {
        setFields({ ...fields, [key]: { ...fields[key], value } })
    }

    return {
        fields,
        setValue
    }
}

export default useForm
