import React, { useState } from 'react'

const useShowMarks = (api) => {
    const [marks, setMarks] = useState([])
    
    const loadMarks = async (id) => {
        const res = await api['listMarks'](id)
        const data = await res.json()
    }

    return {}
}

export default useShowMarks
