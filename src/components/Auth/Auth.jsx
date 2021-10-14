import React from 'react'
import { useUser } from '../../Contexts/AuthContext'

const Auth = ({ children, userType=false }) => {
    const user = useUser()
    const hasUserType = Boolean((!userType || user.type === userType))
    return (
        user && hasUserType && <React.Fragment>{children}</React.Fragment>
    )
}

export default Auth
