import React from 'react'

const DepartmentForm = () => {
    return (
        <form>
            <h2 className="formHeader">Department</h2>
            <div className="inputWrapper">
                <label htmlFor="dptName">Name</label>
                <input type="text" id="dptName" />
            </div>
            <button className="btn formSubmitBtn">Create Department</button>
        </form>
    )
}

export default DepartmentForm
