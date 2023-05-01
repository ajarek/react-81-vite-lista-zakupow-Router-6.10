import React from 'react'
import './List.css'
const List = ({ array }) => {
  return (
    <ul className='list'>
      {array.map((el, index) => {
        return (
          <li key={index}>
            <div className="li-info-wrapper">
            <img
              src={el.image}
              alt={el.name}
            />{' '}
            <span>{el.name}</span>
            </div>
            <input type="checkbox" name="" id="" />
          </li>
        )
      })}
    </ul>
  )
}

export default List
