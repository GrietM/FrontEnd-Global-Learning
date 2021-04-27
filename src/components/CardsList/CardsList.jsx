import Card from '../Cards/Card'
import './CardsList.css'

const CardsList = (props) => {
  return(
    <div> 
      {props.data.map(profile => <Card profile = {profile}/>)}
    </div>
  )
}

export default CardsList