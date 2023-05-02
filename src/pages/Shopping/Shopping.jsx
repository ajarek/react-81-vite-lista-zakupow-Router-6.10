import React from 'react'
import { useNavigate } from 'react-router-dom'
import {fetchStorage, deleteStorage} from '../../helper/localStorage'
import './Shopping.css'
const Shopping = () => {
  const navigate = useNavigate();
  const shopping = fetchStorage('food')||[]
  return (
    <div className="shopping">
      <div className='title-shopping'>
        <span>Zakupy</span>
        <button onClick={()=>{deleteStorage('food');navigate('/')}} >❌all</button>
      </div>
    <ul className='list'>
      {shopping.map((el)=>{
        return (
          <li
          key={el.id}
          className='li'
        >
          <div className='li-info-wrapper'>
            <img
              src={el.image}
              alt={el.name}
            />{' '}
            <span>{el.name}</span>
          </div>
          <button>❌</button>
        </li>
        )
      })}
    </ul>
    </div>
  )
}

export default Shopping