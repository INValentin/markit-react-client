import React, { useContext, useState } from 'react'


const AuthContext = React.createContext(null)
const AuthUpdateContext = React.createContext()

export const useUser = () => useContext(AuthContext)

export const useUserUpdate = () => useContext(AuthUpdateContext)


const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    return <AuthContext.Provider value={user}>
        <AuthUpdateContext.Provider value={setUser}>
            {children}
        </AuthUpdateContext.Provider>
    </AuthContext.Provider>
}

export default UserProvider