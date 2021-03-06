const fields = {
  department: {
    name: { label: "Name", type: "text", value: "" },
  },

  module: {
    name: { label: "Name", type: "text", value: "" },
    code: { label: "code", type: "text", value: "" },
    credits: { label: "credits", type: "number", value: "" },
    teacher_id: { label: "Teacher", type: "select", options: "teachers@index" },
    foculty_id: {
      label: "Department",
      type: "select",
      options: "departments@index",
    },
  },

  student: {
    name: { label: "Name", type: "text", value: "" },
    email: { label: "E-mail", type: "email", value: "" },
    phone: { label: "Phone", type: "number" },
    index_number: { label: "Index Number", type: "text", value: "" },
    password: { label: "Password", type: "password", value: "" },
    password_confirmation: {
      label: "Re-Enter Password",
      type: "password",
      value: "",
    },
    foculty_id: {
      label: "Department",
      type: "select",
      options: "departments@index",
      value: "",
    },
  },

  teacher: {
    name: { label: "Name", type: "text", value: "" },
    email: { label: "E-mail", type: "email", value: "" },
    phone: { label: "Phone", type: "number" },
    password: { label: "Password", type: "password", value: "" },
    password_confirmation: {
      label: "Re-Enter Password",
      type: "password",
      value: "",
    },
  },

  marks: {
    module_id: {
      label: "Module",
      type: "select",
      options: "modules@index",
      value: "",
    },
    student_id: {
      label: "Student",
      type: "select",
      options: "modules@listStudents@module_id",
      value: "",
    },
    formative: { label: "Formative Assessment", type: "number", value: "" },
    summative: { label: "Summative Assessment", type: "number", value: "" },
    academic_year: {
      label: "Academic Year",
      type: "select",
      value: "",
      options: [
        { label: "2018-2019", value: "2018-2019" },
        { label: "2019-2020", value: "2019-2020" },
        { label: "2020-2021", value: "2020-2021" },
        { label: "2021-2022", value: "2021-2022" },
      ],
    },
    semester: {
      label: "Semester",
      type: "select",
      options: [
        { label: "I", value: "I" },
        { label: "II", value: "II" },
      ],
      value: "",
    },
  },
  login: {
    email: { label: "E-mail", type: "email" },
    password: { label: "Password", type: "password" },
    user_type: {
      label: "Account Type",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Teacher", value: "teacher" },
        { label: "Student", value: "student" },
      ],
      value: "admin",
    },
    remember_me: { label: "Remember-me", type: "checkbox" },
  },
  register: {
    name: { label: "Name", type: "text" },
    email: { label: "E-mail", type: "email" },
    password: { label: "Password", type: "password" },
    password_confirmation: { label: "Re-enter Password", type: "password" },
  },
  password: {
    current_password: { label: "Current Password", type: "password" },
    password: { label: "New Password", type: "password" },
    password_confirmation: { label: "Re-enter New Password", type: "password" },
  },
  
  
  change_info: {
    name: { label: "New Name", type: "text" },
    email: { label: "New E-mail", type: "email" },
    phone: { label: "Phone", type: "number" },
  }
};

// student module marks record fields
// fields.studentMarks = {};
// Object.assign(fields.studentMarks, fields.marks)

// fields.studentMarks.module_id = {
//   label: "",
//   type: "hidden",
//   value: ":module_id",
// };

// fields.studentMarks.student_id = {
//   label: "",
//   type: "hidden",
//   value: ":student_id",
// };

// module students marks record fields
fields.recordMarks = {};
Object.assign(fields.recordMarks, fields.marks)

fields.recordMarks.module_id = {
  label: "",
  type: "hidden",
  value: ":module_id",
};

fields.recordMarks.student_id = {
  label: "",
  type: "hidden",
  value: ":student_id",
};

fields.recordMarks.semester = {
  label: "",
  type: "hidden",
  value: ":semester",
};

fields.recordMarks.academic_year = {
  label: "",
  type: "hidden",
  value: ":academic_year",
};



export const normalizeFields = (fields) => {
  const fieldsClone = { ...fields };
  Object.keys(fields).forEach((group) => {
    fieldsClone[group] = { ...fields[group] };
    Object.keys(fields[group]).forEach((prop) => {
      const field = fields[group][prop];
      fields[group][prop]["errors"] = field.errors || [];
      fields[group][prop]["value"] = field.value || "";
      fields[group][prop]["type"] = field.type || "text";
      fieldsClone[group][prop] = { ...fields[group][prop] };
    });
  });
  return fieldsClone;
};

export const getClone = (key) => {
  if (!(key in fields)) return null;
  const clone = { ...fields[key] };
  Object.keys(clone).forEach((k) => {
    clone[k] = { ...fields[key][k] };
  });
  return clone;
};

export default normalizeFields(fields);
