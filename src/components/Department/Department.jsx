import React from 'react'
import './Department.css'

const Department = ({dpt}) => {
    return (
        <div className="dpt">
          <span className="dptName">{dpt.name}</span>
        </div>
    )
}

export default Department
