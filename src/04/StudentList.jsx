// props = read-only properties that are shared between components.
// A parent component can send data to a child component.
// <Component key=value />
import Student from "./Student"
function StudentList() {
  return (
    <>
      <Student name="홍길동" age={30} isStudent={true} />
      <Student name="김철수" age={41} isStudent={false} />
      <Student name="박나리" age={50} isStudent={false} />
      <Student name="이정인" age={20} isStudent={true} />
      <Student/>
    </>
  )
}

export default StudentList
