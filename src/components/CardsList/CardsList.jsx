//import Card from '../Cards/Card'
import { Card } from 'antd';
const { Meta } = Card;

const CardsList = (props) => {
  return(
    <div> 
     {props.data.map(profile =>
      <Card
        profile = {profile}
        hoverable
        style={{ width: 240 }}
        cover={<img src= {profile.avatar_url} alt = ''/>}
      >
        <Meta title= {profile.name} description={ 'Company:' + profile.company} />
        <div>
        <ul>
         <a href = {profile.html_url} > Visit this profile </a>
        </ul>
        </div>
      </Card>
        )}
    </div>
  )
}

export default CardsList

