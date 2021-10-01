const fields = {
    department: {
        name: { label: "Name", type: "text" }
    },

    module: {
        name: { label: "Name", type: "text" },
        code: { label: "code", type: "text" },
        credits: { label: "credits", type: "number" }
    },

    student: {
        name: { label: "Name", type: "text" },
        email: { label: "E-mail", type: "email" },
        index_number: { label: "Index Number", type: "text" },
        password: { label: "Password", type: "password" },
        password_confirmation: { label: "Re-Enter Password", type: "password" },
        department: { label: "Department", type: "select", options: [] }
    },

    teacher: {
        name: { label: "Name", type: "text" },
        email: { label: "E-mail", type: "email" },
        password: { label: "Password", type: "password" },
        password_confirmation: { label: "Re-Enter Password", type: "password" },
    },

    marks: {
        module: { label: "Module", type: "select", options: [] },
        student: { label: "Student", type: "select", options: [] },
        formative: { label: "Formative Assessment", type: "number" },
        summative: { label: "Summative Assessment", type: "number" },
        academic_year: { label: "Academic Year", type: "text" },
        semester: {
            label: "Semester", type: "select",
            options: [
                { label: "I", value: "I" },
                { label: "II", value: "II" }
            ],

        }
    }
}

Object.entries(fields).forEach(([k, v]) => {
    for (const field in fields[k]) {
        if (Object.hasOwnProperty.call(fields[k], field)) {
            fields[k][field]['errors'] = fields[k][field]['errors'] || []
            fields[k][field]['value'] = fields[k][field]['value'] || ''
            fields[k][field]['type'] = fields[k][field]['type'] || 'text'
        }
    }
})

export default { ...fields };