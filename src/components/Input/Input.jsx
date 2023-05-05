import { React, useState, useContext, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../App'
import './Input.css'
const Input = ({onSubmit, placeholder }) => {
  const { checkedValues,setCheckedValues,value, setValue,todo, setTodo} = useContext(AppContext)
  const inputEl = useRef()
  useEffect(()=>{
    inputEl.current.focus();
  })
  
  return (
    <form onSubmit={onSubmit}>
    <input 
       ref={inputEl}
      className='input-component'
      type="text"
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      placeholder={placeholder}
    />
     <button className='submit' type='submit'>🖊️ add</button>
    </form>
  );
};

export default Input;