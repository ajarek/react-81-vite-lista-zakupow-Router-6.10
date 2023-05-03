import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  saveStorage,
  fetchStorage,
  saveStoragePush,
} from '../../helper/localStorage'
import Input from '../../components/Input/Input'
import './Todo.css'
const Todo = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [todo, setTodo] = useState([])
  const [localTodo, setLocalTodo] = useState([])
  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const addedTodo = (e) => {
    setTodo([...todo, value])
  }
  useEffect(() => {
     
      saveStoragePush(todo, 'todo')
    
    
  }, [todo])
  useEffect(() => {
    setTodo(fetchStorage('todo'))
  }, [])
  const strikethroughText = (e) => {
    if (e.target.style.textDecoration !== 'line-through') {
      e.target.style.textDecoration = 'line-through'
    } else {
      e.target.style.textDecoration = 'none'
    }
  }

  const deleteItem = (e) => {
    const filterTodo = todo.filter((item) => item.id != e.target.id)
    saveStorage(filterTodo, 'food')
    navigate('/zakupy')
  }

  return (
    <div className='todo'>
      <div className='title-todo'>
        <Input
          value={value}
          onChange={handleInputChange}
        />
        <button onClick={addedTodo}>🖊️ add</button>
      </div>
      <ul>
        {todo && todo.map((td, index) => {
          return (
            <li
              key={index}
              className='li'
            >
              <div onClick={strikethroughText}>{td}</div>

              <button
                className='delete'
                id={index}
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

export default Todo
