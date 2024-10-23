import { useRef, useEffect } from "react";

export default function MyComponent_19_3(){

  const inputRef = useRef()

  useEffect( () => {
    console.log(inputRef)
    inputRef.current.focus()
  },[] )

  const login = () => {
    alert(`Hello! ${inputRef.current.value} ~`)
    inputRef.current.value = ""
    inputRef.current.focus()
  }

  const handleOnKeyPress = e => {
    if (e.key == 'Enter'){
      login()
    }
  }
  return(
    <div>
      <input ref={inputRef} type="text" placeholder="username" onKeyUp={handleOnKeyPress} />
      <button onClick={login}>로그인</button>
    </div>
  )
}