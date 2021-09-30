import React from 'react'
import fields from './fields'
import Form from './Form/Form'

const DepartmentForm = () => {
    // console.log(fields.department)
    return (
        <Form title="Department" fields={fields.department} submitText="Create department" />
    )
}

export default DepartmentForm
