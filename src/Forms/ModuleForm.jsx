import React from 'react'

const ModuleForm = () => {
    return (
        <form>
            <h2 className="formHeader">Module</h2>
            <div className="inputWrapper">
                <label htmlFor="modName">Name</label>
                <input type="text" id="modName" />
            </div>
            <div className="inputWrapper">
                <label htmlFor="modCode">Module Code</label>
                <input type="text" id="modCode" />
            </div>
            <div className="inputWrapper">
                <label htmlFor="modCredits">Credits</label>
                <input type="number" id="modCredits" />
            </div>
            <button className="btn formSubmitBtn">Create Module</button>
        </form>
    )
}

export default ModuleForm
