import { useState } from 'react'

const useForm = (initialData = {}) => {
    const [data, setData] = useState({...initialData});

    const changeData = (key, value) => {
        setData({...data, [key]: value})
    }
    
    return {
        data,
        changeData
    }
}

export default useForm
