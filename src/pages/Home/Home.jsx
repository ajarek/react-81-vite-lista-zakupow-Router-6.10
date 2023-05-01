import { useEffect, useState } from 'react'
import { food } from '../../assets/food'
import List from '../../components/List/List'
import './Home.css'
const Home = () => {

  useEffect(() => {
    const items = [...document.querySelectorAll('.li')]
    const filterItems = items.filter((el) => el.checked === true)
    console.log(items[0])
  })
  return (
    <div className='home'>
      <div className='title-home'>
        <span>Lista Artykułów</span>
        <button>🛒</button>
      </div>
      <List
        array={food}
      />
    </div>
  )
}

export default Home
