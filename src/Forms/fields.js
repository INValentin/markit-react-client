const fields = {
    department: {
        name: { label: "Name", type: "text", value: "" }
    },

    module: {
        name: { label: "Name", type: "text", value: "" },
        code: { label: "code", type: "text", value: "" },
        credits: { label: "credits", type: "number", value: "" },
        teacher_id: { label: "Teacher", type: "select", options: "teachers@index" },
        foculty_id: { label: "Department", type: "select", options: "departments@index" }
    },

    student: {
        name: { label: "Name", type: "text", value: "" },
        email: { label: "E-mail", type: "email", value: "" },
        index_number: { label: "Index Number", type: "text", value: "" },
        password: { label: "Password", type: "password", value: "" },
        password_confirmation: { label: "Re-Enter Password", type: "password", value: "" },
        foculty_id: { label: "Department", type: "select", options: "departments@index", value: "" }
    },

    teacher: {
        name: { label: "Name", type: "text", value: "" },
        email: { label: "E-mail", type: "email", value: "" },
        password: { label: "Password", type: "password", value: "" },
        password_confirmation: { label: "Re-Enter Password", type: "password", value: "" },
    },

    marks: {
        module_id: { label: "Module", type: "select", options: "modules@index", value: "" },
        student_id: { label: "Student", type: "select", options: "students@index", value: "" },
        formative: { label: "Formative Assessment", type: "number", value: "" },
        summative: { label: "Summative Assessment", type: "number", value: "" },
        academic_year: { label: "Academic Year", type: "text", value: "" },
        semester: {
            label: "Semester", type: "select",
            options: [
                { label: "I", value: "I" },
                { label: "II", value: "II" }
            ],
            value: ""
        }
    }
}

Object.keys(fields).forEach(group => {
    Object.keys(fields[group]).forEach(prop => {
        const field = fields[group][prop]
        fields[group][prop]['errors'] = field.errors || []
        fields[group][prop]['value'] = field.value || ''
        fields[group][prop]['type'] = field.type || 'text'
    })
})

export default {...fields};