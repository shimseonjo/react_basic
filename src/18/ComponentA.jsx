import { createContext, useState } from 'react'
import './Component.css'
import ComponentB from './ComponentB'

export const UserContext = createContext()

function ComponentA(){
  const [user, setUser] = useState("홍길동")
  return(
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user}/>
      </UserContext.Provider>
    </div>
  )
}

export default ComponentA