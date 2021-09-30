import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

export const useModal = () => {
  const [showModal, setShowModal] = useState(false)

  return {
    show: showModal,
    toggleModal() {
      setShowModal(prev => !prev)
    },
    
    hideModal() {
      setShowModal(false)
    },

    showModal() {
      setShowModal(true)
    }
  }
}

const Modal = ({children, show = false, onHide}) => {
  const toggleHandler = e => {
    if (e.target.classList.contains ('modalWrapper')) {
      if (typeof onHide === 'function') onHide ();
    }
  };

  return ReactDOM.createPortal (
    <div
      onClick={toggleHandler}
      className={`${!show ? 'hide' : ''} modalWrapper`}
    >
      {children}
      <button onClick={onHide} className="closeBtn">Close</button>
    </div>,
    document.getElementById ('modal-root')
  );
};

export default Modal;
