import React, { useState, useEffect, useLayoutEffect } from 'react'
import './Hide.css'


const Hide = ({children, show, Component=null}) => {
    const [wasShown, setWasShown] = useState(false);

    useLayoutEffect(() => {
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
