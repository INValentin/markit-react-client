// import React, {useEffect, useState} from 'react';
// import {useTeacherApi} from '../hooks/useApi';
// import useForm from '../hooks/useForm'
// import {getClone} from './fields';
// import Form from './Form/Form';

// const TeacherForm = ({action = '', onDone, teacher}) => {
//   const {loading, store, update} = useTeacherApi ();
//   const { fields, setValue } = useForm(getClone ('teacher'))
//   const [populated, setPopulated] = useState (false);

//   const createHandler = (data, {success, failure}) => {
//     store (JSON.stringify (data)).then (async res => {
//       const data = await res.json ();
//       if (!res.ok) {
//         return data.errors && failure (data);
//       }
//       onDone (data);
//       success ('Teacher created!');
//     });
//   };

//   const updateHandler = async (data, {success, failure}) => {
//     const res = await update (teacher.id, JSON.stringify (data));
//     const result = await res.json ();

//     if (!res.ok) {
//       return failure (result);
//     }

//     onDone (result);
//     // success ('Teacher updated!');
//   };

//   useEffect (
//     () => {
//       const canPopulate = typeof teacher === 'object' && !populated;
//       if (!canPopulate) return undefined;
//       const newFields = populateFields (teacher, fields);
//       setFields(newFields)
//       setPopulated (true);
//     },
//     [teacher, populated, fields]
//   );

//   return (
//     <Form
//       fields={fields}
//       setValue={setValue}
//     />
//   );
// };

// export default TeacherForm;
import React from 'react'

const TeacherForm = () => {
  return (
    <div>
      
    </div>
  )
}

export default TeacherForm
