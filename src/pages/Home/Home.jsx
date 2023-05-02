import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import { food } from '../../assets/food'
import List from '../../components/List/List'
import './Home.css'
const Home = () => {
  const { checkedValues,setCheckedValues } = useContext(AppContext)
  
   const saveLocalStorage=()=>{
    const foodFilter= food.filter(el=>checkedValues.includes(el.id))
    console.log(foodFilter);
   }
  return (
    <div className='home'>
      <div className='title-home'>
        <span>Lista Artykułów</span>
        <button onClick={saveLocalStorage}>🛒</button>
      </div>
      <List
        array={food}
      />
    </div>
  )
}

export default Home
