import '../css/CardContainer.css'
import Card from './Card.jsx'

function CardContainer({ count, setCount }) {
  return (
    <div className='card-grid-container'>
      <Card count={count} setCount={setCount} />
      <Card count={count} setCount={setCount} />
      <Card count={count} setCount={setCount} />
    </div>
  )
}

export default CardContainer
