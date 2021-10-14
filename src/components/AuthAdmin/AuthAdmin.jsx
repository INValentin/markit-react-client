import React from 'react'
import Auth from '../Auth/Auth'

const AuthAdmin = (props) => {
    return <Auth {...props} userType="admin" />
}

export default AuthAdmin
