import React from 'react'
import fields from './fields'
import Form from './Form/Form'

const StudentForm = () => {
    return (
        <Form fields={fields.student} title="Student" submitText="Create student" />
    )
}

export default StudentForm
