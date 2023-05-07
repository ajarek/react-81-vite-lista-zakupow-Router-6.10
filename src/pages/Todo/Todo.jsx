import { React, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import {
  saveStorage,
  saveStoragePush,
  getStorage
} from '../../helper/localStorage'
import Input from '../../components/Input/Input'
import './Todo.css'
const Todo = () => {
  
  const {  todo, setTodo, setValue } =
    useContext(AppContext)

  const addTodo = (e) => {
    e.preventDefault()
  setTodo([...todo, e.target[0].value])
  setValue('')
  }

  useEffect(() => {
    if (todo.length>0)
   { saveStoragePush(todo,'todo')}
  }, [todo])

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem("todo"));
    if (storedTodo) {
      setTodo(storedTodo);
    }
  },[])

  const strikethroughText = (e) => {
    if (e.target.style.textDecoration !== 'line-through') {
      e.target.style.textDecoration = 'line-through'
    } else {
      e.target.style.textDecoration = 'none'
    }
  }

  const removeTodo = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo)
    saveStorage(newTodo,'todo')
  };

  return (
    <div className='todo'>
      <div className='title-todo'>
        <Input onSubmit={addTodo} />
      </div>
      <ul>
        {todo.length>0 && todo.sort().map((td, index) => {
            return (
              <li
                key={index}
                className='li'
              >
                <div onClick={strikethroughText}>{td}</div>

                <button
                  className='delete'
                  id={index}
                  onClick={() => removeTodo(index)}
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
