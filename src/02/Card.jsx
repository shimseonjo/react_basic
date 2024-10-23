import profilePic from '../assets/profile.png'
import './Card.css'

function Card(){
  return(
    <div className="card">
      {/* <img src="https://via.placeholder.com/150" alt="profile picture" /> */}
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className="card-title">Test</h2>
      <p className='card-text'>I make Youtube videos and play</p>
    </div>
  )
}
export default Card