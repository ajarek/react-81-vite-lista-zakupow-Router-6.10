import React from 'react';
import './Input.css'
const Input = ({ value, onChange, placeholder }) => {
  return (
    <input 
      className='input-component'
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;