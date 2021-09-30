import React from 'react'
import fields from './fields'
import Form from './Form/Form'

const TeacherForm = () => {
    return (
        <Form title="Teacher" fields={fields.teacher} submitText="Create Teacher" />
    )
}

export default TeacherForm
