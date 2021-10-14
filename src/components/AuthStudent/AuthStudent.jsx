import React from 'react'
import Auth from '../Auth/Auth'

const AuthStudent = (props) => {
    return <Auth {...props} userType="student" />
}

export default AuthStudent
