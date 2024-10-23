
// useEffect(function,[dependencies])
// 1. runs after every re-render
// useEffect(()=>{})
// 2. runs only on mount
// useEffect(()=>{},[])
// 3. runs on mount + when vales changes
// useEffect(()=>{},[value])

// uses
// 1. Event Listeners
// 2. DOM manipulation
// 3. Subscriptions (real-time updates)
// 4. Fetching Data from an API
// 5. Clean up when a component unmounts

import { useState, useEffect } from "react";

function MyComponent_16(){
  
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count}  ${color}`;
    return() => {
      // some cleanup code
    }
  },[count,color]);

  function addCount(){
    setCount(c => c + 1);
  }

  function subtractCount(){
    setCount(c => c - 1);
  }

  function changeColor(){
    setColor(c => c === "green" ? "red" : "green");
  }

  return(
    <>
      <p style={{color:color}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button><br/>
      <button onClick={changeColor}>Change color</button>
    </>
  )
}
export default MyComponent_16