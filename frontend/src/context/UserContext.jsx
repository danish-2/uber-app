import React, { createContext } from 'react'
import { useState } from 'react'

export const UserDataContext = createContext()
const userContext = ({children}) => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        fullName:{
            firstName: '',
            lastName: ''
        }
    })
  return (
    <div>
        <UserDataContext.Provider value={{userData, setUserData}}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default userContext