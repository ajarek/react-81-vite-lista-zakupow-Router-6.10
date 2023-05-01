import {food} from '../../assets/food'
import List from '../../components/List/List'
import './Home.css'
const Home = () => {
  console.log(food);
  return (
    <div className='home'>
      <div className='title-home'>Lista Artykułów</div>
      <List array={food}/>
    </div>
  )
}

export default Home
