import React from 'react'
import { Button } from './Button'

const Card = ( {product, iphone}) => {
  console.log(product,iphone); 
}

  // In Card.jsx, extract the product prop.

  return (
    <div style={{width :"18rem"}}>
        <img src={"https://www.shutterstock.com/image-photo/cropped-image-player-scoring-run-600nw-647577478.jpg"} alt="img not shown" className='ImgCard' />
        <h3 className='headingCard'>{product.pname}</h3>
        <h3 >{iphone.pname}</h3>
        <Button></Button>

        
    </div>
  )


export default Card