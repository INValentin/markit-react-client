import React from 'react'
import { useUser } from "../../Contexts/AuthContext"

const AuthIn = ({children, userTypes=[]}) => {
    const user = useUser()
    const userAllowed = user && userTypes.includes(user.type)

    return userAllowed && <React.Fragment>
        {children}
    </React.Fragment>
}

export default AuthIn
