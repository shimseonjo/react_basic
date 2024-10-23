import { useState } from "react";

export default function MyComponent_08(){

  const [name,setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed,setIsEmployed] = useState(false);

  const updateName = () => {
    setName("홍길동");
  }
  const incrementAge = () => {
    setAge(age+1);
  }
  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }
  
  return(
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is employed: {isEmployed?"yes":"no"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  )
}
