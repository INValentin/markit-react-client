import React from 'react'

const TeacherForm = () => {
    return (
        <form>
            <h2 className="formHeader">Teacher</h2>
            <div className="inputWrapper">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div className="inputWrapper">
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" />
            </div>
            <div className="inputWrapper">
                <label htmlFor="pass">Password</label>
                <input type="password" id="pass" />
            </div>
            <div className="inputWrapper">
                <label htmlFor="pass2">Re-enter Password</label>
                <input type="password" id="pass2" />
            </div>
            <button className="btn formSubmitBtn">Create Teacher</button>
        </form>
    )
}

export default TeacherForm
