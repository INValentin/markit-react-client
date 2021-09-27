import React from 'react'
import './Hide.css'

const Hide = ({children, show, Component=null}) => {

    return (
        <div className={`${show ? 'show' : 'hide'} hideWrapper`}>
            { typeof Component === 'function' ? <Component /> : children}
        </div>
    )
}

export default Hide
