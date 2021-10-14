import React from 'react'
import './MarkCreate.css'
import Modal, { useModal } from '../Modal/Modal'
import ModelForm from '../../Forms/ModelForm'
import AuthIn from '../AuthIn/AuthIn'


const MarkCreate = ({ onCreate }) => {
    const { show, hideModal, toggleModal } = useModal()

    return (
        <AuthIn userTypes={['admin', 'teacher']}>
        <div className="markCreateWrapper">
            <Modal show={show} onHide={hideModal}>
                <ModelForm onDone={data => onCreate && onCreate(data)} modelName={{label: "Marks", fields: "marks", api: "marks"}} />
            </Modal>
            <button onClick={toggleModal} className="markCreateBtn btn">Record Marks</button>
        </div>
        </AuthIn>
    )
}

export default MarkCreate
