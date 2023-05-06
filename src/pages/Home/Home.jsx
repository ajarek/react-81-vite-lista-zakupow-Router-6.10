import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../App'
import { food } from '../../assets/food'
import { saveStorage } from '../../helper/localStorage'
import List from '../../components/List/List'
import './Home.css'
const Home = () => {
  const { checkedValues, setCheckedValues } = useContext(AppContext)

  const navigate = useNavigate()

  const saveLocalStorage = () => {
    const foodFilter = food.filter((el) => checkedValues.includes(el.id))
    saveStorage(foodFilter, 'food')
    setCheckedValues(Array(0))
    navigate('/zakupy')
  }
  return (
    <div className='home'>
      <div className='title-home'>
        <span>Lista Artykułów</span>
        <button onClick={saveLocalStorage}>🛒 add</button>
      </div>
      <List array={food} />
    </div>
  )
}

export default Home
