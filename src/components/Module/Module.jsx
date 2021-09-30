import React from 'react'
import './Module.css'

import Modal, { useModal } from '../Modal/Modal'
import { MarksForm } from '../../Forms'

const Module = ({module}) => {
    const { show, toggleModal, hideModal } = useModal()

    return (
        <div className="module">
            <Modal onHide={hideModal} show={show} Component={MarksForm} />
          <span className="moduleName">{module.name}</span>
          <div className="moduleBtns">
            <button onClick={toggleModal} className="btn btnSm createMarksBtn">Create marks</button>
            <button className="btn viewMarksBtn btnSm">View Marks</button>
          </div>
        </div>
    )
}

export default Module
