// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import headerImage from './assets/catimg.jpg'
import GreetingFunction from './components/GreetingFunction'
import GreetingClass from './components/GreetingClass'
import CountWithUSerEffect from './components/CountWithUSerEffect'
import Card from './components/Card'


const product ={pname :"Bat" ,image:"", price:100000,inStock :true}

const iphone ={pname :"Iphone", image :"", price:340000, instock:true }

function App() {
  return (
    <>
      {/* {/* <h2>learning React </h2> */}
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eaque blanditiis dolores magni, omnis eum quisquam dicta sunt, fuga non voluptas eius voluptatum culpa quibusdam esse vel earum ad commodi.</p>
      <img src={headerImage} alt="image not found" className='imgclass' />
    
    <GreetingFunction data="virat Kohali" age ={36} />
    <GreetingFunction data="Rohit Sharma" age={37}/>
    <GreetingFunction data="KL Rahul" age={31}/>

    <hr />
    <GreetingClass data="rohit Hitman"></GreetingClass> 
    <Card product={product}></Card>  
     {/* Passing product object as a prop */}
     <Card iphone={iphone}></Card>

    {/* When we say “send product as a prop”, it means we are passing an object (containing product details) from a parent component to a child component (like a Card component). */}
    {/* <CountWithUSerEffect/> */}
    </>
  )
}

export default App

// Step 1: Define the Data in the Parent Component (App.jsx)

// Step 2: Pass the Props to the Child Component (Card.jsx)

// Step 3: Receive the Props in the Child Component (Card.jsx) declare variable