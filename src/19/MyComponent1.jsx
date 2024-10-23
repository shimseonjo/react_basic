import { useState,useRef } from "react";

export default function MyComponent_19_1(){

  const [count,SetCount] = useState(0)
  const countRef = useRef(0)
  let countVar = 0

  const incrementCountState =  () => {
    SetCount(count + 1)
    console.log('state:',count)
    console.log('ref:',countRef)
    console.log('var:',countVar)
  }
  const incrementCountRef = () => {
    countRef.current = countRef.current + 1
    console.log('state:',count)
    console.log('ref:',countRef)
    console.log('var:',countVar)
  }

  const incrementCountVar = ()  => {
    countVar = countVar + 1
    console.log('state:',count)
    console.log('ref:',countRef)
    console.log('var:',countVar)
  }
  return(
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={incrementCountState}>State 증가</button>
      <button onClick={incrementCountRef}>Ref 증가</button>
      <button onClick={incrementCountVar}>Var 증가</button>
    </div>
  )
}
