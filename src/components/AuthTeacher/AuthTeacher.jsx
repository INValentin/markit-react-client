import React from 'react'
import Auth from '../Auth/Auth'

const AuthTeacher = (props) => {
    return <Auth {...props} userType="teacher"  />
}

export default AuthTeacher
