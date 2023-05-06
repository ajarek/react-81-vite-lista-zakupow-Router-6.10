import { React, useContext, useRef, useEffect } from 'react'
import { AppContext } from '../../App'
import './Input.css'
const Input = ({ onSubmit, placeholder }) => {
  const { value, setValue } = useContext(AppContext)
  const inputEl = useRef()
  useEffect(() => {
    inputEl.current.focus()
  })

  return (
    <form onSubmit={onSubmit}>
      <input
        ref={inputEl}
        className='input-component'
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label={'note'}
      />
      <button
        className='submit'
        type='submit'
      >
        🖊️ add
      </button>
    </form>
  )
}

export default Input
