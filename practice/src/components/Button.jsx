import React from 'react'

// adding css through object
const btnOne ={
    color :"white", backgroundColor:"black", padding:"5px"
}
export const Button = () => {
  return (
    <button style={btnOne}>Add to cart</button>
  )
}
