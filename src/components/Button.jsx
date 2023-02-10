import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius,func}) => {
  return (
    <button 
    onClick={func}
    type='button'
    style={{ backgroundColor: bgColor, color, borderRadius}}
    className= {`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button
