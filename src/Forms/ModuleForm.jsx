import React from 'react'
import fields from './fields'
import Form from './Form/Form'

const ModuleForm = () => {

    return (
        <Form title="Module" fields={fields.module} submitText="Create Module" />
    )
}

export default ModuleForm
