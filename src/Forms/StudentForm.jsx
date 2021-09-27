import React from 'react'

const StudentForm = () => {
    return (
        <form>
            <h2 className="formHeader">Student</h2>

            <div className="inputWrapper">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div className="inputWrapper">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" />
            </div>
            <div className="inputWrapper">
                <label htmlFor="index_number">Index Number</label>
                <input type="text" id="index_number" />
            </div>
            <div className="inputWrapper">
                <label htmlFor="pass">Password</label>
                <input type="password" id="pass" />
            </div>
            <div className="inputWrapper">
                <label htmlFor="pass2">Re-enter Password</label>
                <input type="password" id="pass2" />
            </div>

            <button className="btn formSubmitBtn">Create Student</button>
        </form>
    )
}

export default StudentForm
