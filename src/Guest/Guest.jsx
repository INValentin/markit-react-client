import React from 'react'
import { useUser } from '../Contexts/AuthContext'

const Guest = ({children, notUserType}) => {
    const user = useUser()
    const isNotUserType = Boolean((notUserType && user.type !== notUserType))
    return (
        (!user || isNotUserType) && <React.Fragment>{children}</React.Fragment>
    )
}

export default Guest
