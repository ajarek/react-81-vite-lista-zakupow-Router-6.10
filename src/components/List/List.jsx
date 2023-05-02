import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import './List.css'
const List = ({ array }) => {
  
  const { checkedValues,setCheckedValues} = useContext(AppContext)
const handleChange=(e)=>{
  const {id,value,checked}=e.target
  setCheckedValues([...checkedValues,id])
}
console.log(checkedValues)
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
            <input type="checkbox" name="" id={el.id} value={el.name} onChange={handleChange} />
          </li>
        )
      })}
    </ul>
  )
}

export default List
