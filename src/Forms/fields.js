const fields = {
    department: {
        name: { label: "Name", type: "text", value: "" }
    },

    module: {
        name: { label: "Name", type: "text", value: "" },
        code: { label: "code", type: "text", value: "" },
        credits: { label: "credits", type: "number", value: "" }
    },

    student: {
        name: { label: "Name", type: "text", value: "" },
        email: { label: "E-mail", type: "email", value: "" },
        index_number: { label: "Index Number", type: "text", value: "" },
        password: { label: "Password", type: "password", value: "" },
        password_confirmation: { label: "Re-Enter Password", type: "password", value: "" },
        department: { label: "Department", type: "select", options: [], value: "" }
    },

    teacher: {
        name: { label: "Name", type: "text", value: "" },
        email: { label: "E-mail", type: "email", value: "" },
        password: { label: "Password", type: "password", value: "" },
        password_confirmation: { label: "Re-Enter Password", type: "password", value: "" },
    },

    marks: {
        module: { label: "Module", type: "select", options: [], value: "" },
        student: { label: "Student", type: "select", options: [], value: "" },
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

export default {...fields};