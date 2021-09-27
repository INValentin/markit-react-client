import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

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
