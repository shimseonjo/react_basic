// propTypes = a mechanism that ensures that the passed value is of the correct datatype.
// age: PropTypes.number
import './Student.css'
import PropTypes from 'prop-types'
function Student(props){
  return(
    <div className="student">
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Student : {props.isStudent ? "Yes" : "No" }</p>
    </div>
  )
}
// 타입이 안맞을경우 웹브라우저 콘솔에서 오류확인, 실행은 됨.
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
}
export default Student