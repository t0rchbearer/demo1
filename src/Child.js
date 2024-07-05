import React, { useContext } from 'react'
import { UserContext } from './Parent'

const Child = () => {
    let a=useContext(UserContext)
  return (
    <div>
      {
        a
      }
    </div>
  )
}

export default Child
