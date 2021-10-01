import React, { useState, useEffect } from 'react'
import './Hide.css'


const Hide = ({children, show, Component=null}) => {
    const [wasShown, setWasShown] = useState(false);

    useEffect(() => {
        if (!wasShown && show) {
            setWasShown(true);
        }
    }, [show, wasShown])


    return (
        wasShown && <div className={`${show ? 'show' : 'hide'} hideWrapper`}>
            { typeof Component === 'function' ? <Component /> : children}
        </div>
    )
}

export default Hide
