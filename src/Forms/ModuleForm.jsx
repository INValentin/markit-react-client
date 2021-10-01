import React, { useState } from 'react'
import { useModuleApi } from '../hooks/useApi'
import fields from './fields'
import Form from './Form/Form'

const ModuleForm = ({ onSuccess }) => {
    const [modFields, setModFields] = useState(fields.module)
    const { store } = useModuleApi()

    const createModuleHandler = data => {
        // store(data).then(res => {
        //     console.log(res)
        // })
    }
    

    return (
        <Form title="Module" onSubmit={createModuleHandler} fields={modFields} submitText="Create Module" />
    )
}

export default ModuleForm
