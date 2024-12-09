import React, { useState } from 'react'
import myContextApi from './MyContext'

function ContextProvider({children}) {
    const [user, setUser] = useState({})
  return (
    <myContextApi.Provider value={{user, setUser}}>
      {children}
    </myContextApi.Provider>
  )
}

export default ContextProvider
