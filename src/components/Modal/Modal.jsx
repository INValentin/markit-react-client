import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

export const useModal = () => {
  const [showModal, setShowModal] = useState (false);

  return {
    show: showModal,
    toggleModal () {
      setShowModal (prev => !prev);
    },

    hideModal () {
      setShowModal (false);
    },

    showModal () {
      setShowModal (true);
    },
  };
};

const Modal = ({children, show = false, onHide, Component = null, attrs={}}) => {
  const [wasShown, setWasShown] = useState (false);

  useEffect (
    () => {
      if (!wasShown && show) {
        setWasShown (true);
      }
    },
    [show, wasShown]
  );

  const toggleHandler = e => {
    if (e.target.classList.contains ('modalWrapper')) {
      if (typeof onHide === 'function') onHide ();
    }
  };

  return (
    wasShown &&
    ReactDOM.createPortal (
      <div
        onClick={toggleHandler}
        className={`${!show ? 'hide' : ''} modalWrapper`}
        { ...attrs }
      >
        <button onClick={onHide} className="closeBtn" dangerouslySetInnerHTML={{__html: "&times;"}}></button>
        {typeof Component === 'function' ? <Component /> : children}
      </div>,
      document.getElementById ('modal-root')
    )
  );
};

export default Modal;
