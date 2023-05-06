import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  fetchStorage,
  deleteStorage,
  saveStorage,
} from '../../helper/localStorage'
import './Shopping.css'
const Shopping = () => {
  const navigate = useNavigate()
  const shopping = fetchStorage('food') || []

  const strikethroughText = (e) => {
    if (e.target.style.textDecoration !== 'line-through') {
      e.target.style.textDecoration = 'line-through'
    } else {
      e.target.style.textDecoration = 'none'
    }
  }

  const deleteItem = (e) => {
    const filterShopping = shopping.filter((item) => item.id != e.target.id)
    saveStorage(filterShopping, 'food')
    navigate('/zakupy')
  }

  return (
    <div className='shopping'>
      <div className='title-shopping'>
        <span>Zakupy</span>
        <button
          onClick={() => {
            deleteStorage('food')
            navigate('/')
          }}
        >
          ❌all
        </button>
      </div>
      <ul className='list'>
        {shopping.map((el) => {
          return (
            <li
              key={el.id}
              className='li'
            >
              <div
                className='li-info-wrapper'
                onClick={strikethroughText}
              >
                <img
                  src={el.image}
                  alt={el.name}
                />{' '}
                <span>{el.name}</span>
              </div>
              <button
                className='delete'
                id={el.id}
                onClick={deleteItem}
              >
                ❌
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Shopping
