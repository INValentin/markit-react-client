import React from 'react'
import './MarksList.css'

const MarksList = () => {
    return (
        <div className="marksWrapper">
            <h2 className="marksHeader">Marks</h2>

            <div className="inputWrapper">
                <label htmlFor="viewBy">View marks for: </label>
                <select name="" id="viewBy">
                    <option value="student">Student</option>
                    <option value="module">Module</option>
                </select>
            </div>
            <div className="inputWrapper">
                <label htmlFor="searchMarks">Search marks</label>
                <input type="search" id="searchMarks" placeholder="Search student, module marks" />
            </div>

            <div className="marksList">
                <div className="marks">

                </div>
            </div>
        </div>
    )
}

export default MarksList
