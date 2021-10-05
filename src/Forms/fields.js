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
        phone: { label: "Phone", type: "number" },
        index_number: { label: "Index Number", type: "text", value: "" },
        password: { label: "Password", type: "password", value: "" },
        password_confirmation: { label: "Re-Enter Password", type: "password", value: "" },
        foculty_id: { label: "Department", type: "select", options: "departments@index", value: "" }
    },

    teacher: {
        name: { label: "Name", type: "text", value: "" },
        email: { label: "E-mail", type: "email", value: "" },
        phone: { label: "Phone", type: "number" },
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

const fieldsClone = { ...fields };
Object.keys(fields).forEach(group => {
    fieldsClone[group] = { ...fields[group] }
    Object.keys(fields[group]).forEach(prop => {
        const field = fields[group][prop]
        fields[group][prop]['errors'] = field.errors || []
        fields[group][prop]['value'] = field.value || ''
        fields[group][prop]['type'] = field.type || 'text'
        fieldsClone[group][prop] = { ...fields[group][prop] }
    })
})

export const getClone = (key) => {
    const clone = { ...fields[key] };
    Object.keys(clone).forEach(k => {
        clone[k] = { ...fields[key][k] };
    });
    return clone
}

export const populateFields = (instance, fields) => {
    const newFields = { ...fields };
    Object.keys(newFields).forEach(k => {
        if (k in instance) {
            newFields[k].value = instance[k]||'';
        } else {
            delete newFields[k];
        }
    });
    return (newFields);
};

export default fields;
