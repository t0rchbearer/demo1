import React, { createContext } from 'react'
import Child from './Child'
const UserContext=React.createContext()
const Parent = () => {
   let a=10;
  return (
    <div>
      <UserContext.Provider value={a}>
        <Child/>
      </UserContext.Provider>
    </div>
  )
}

export default Parent
export  {UserContext}
