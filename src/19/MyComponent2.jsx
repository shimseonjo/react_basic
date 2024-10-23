import { useState,useRef,useEffect } from "react";

export default function MyComponent_19_2(){

  const [count,setCount] = useState(0)
  const [renderCount,setRenderCount] = useState(0)
  const renderRef = useRef(0)

  // 의존성 배열이 생략되었으므로 컴포넌트 업데이트시마다 실행
  // 생성시 초기값 0, 생성후 실행되므로 1
  useEffect(()=>{
    // console.log('렌더링:',renderCount)
    // setRenderCount(renderCount+1)
    console.log('렌더링:',renderRef.current)
    renderRef.current = renderRef.current + 1
  })

  return(
    <div>
      <p>State: {count}</p>
      <p>render State: {renderCount}</p>
      <p>Ref: {renderRef.current}</p>
      <button onClick={() => setCount(count + 1)}>State Count 증가</button>
    </div>
  )
}