import React from 'react'
import  CheckboxList from '../../components/CheckboxList/CheckboxList'
import './List.css'
const List = ({ array }) => {
  return (
    <ul className='list'>
      {array.map((el) => {
        return (
          <li key={el.id} className='li'>
            <div className="li-info-wrapper">
            <img
              src={el.image}
              alt={el.name}
            />{' '}
            <span>{el.name}</span>
            </div>
            <CheckboxList option={el.id} />
          </li>
        )
      })}
    </ul>
  )
}

export default List
