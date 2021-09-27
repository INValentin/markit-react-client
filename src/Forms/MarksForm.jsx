import React from 'react';

const MarksForm = () => {
  return (
    <form action="">
      <h2 className="formHeader">Marks</h2>
      <div className="inputWrapper">
        <label htmlFor="module">Select Module</label>
        <select id="module">
          <option>Maths I</option>
          <option>ENG001</option>
          <option>COMP I</option>
        </select>
      </div>
      <div className="inputWrapper">
        <label htmlFor="student">Select Student</label>
        <select id="student">
          <option>Valentin</option>
          <option>Ishimwe</option>
          <option>Niyigena</option>
          <option>Visco</option>
        </select>
      </div>
      <div className="inputWrapper">
        <label htmlFor="formative">Formative Assessment</label>
        <input id="formative" type="number" />
      </div>
      <div className="inputWrapper">
        <label htmlFor="summative">Summative Assessment</label>
        <input id="summative" type="number" />
      </div>
      <button className="btn formSubmitBtn">Record Marks</button>
    </form>
  );
};

export default MarksForm;
