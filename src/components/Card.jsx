import '../css/Card.css'
import { useEffect } from 'react'

function Card({ count, setCount }) {

  function handleClick() {
    if (count < 3) {
      setCount(count + 1);
    }
  }

  return (
    <div onClick={handleClick} className="card-container">
      <img />
      <h3>A New</h3>
      <h4>Card</h4>
    </div>
  )
}

export default Card
