import React from 'react'
import './API_Call.css'

function API_Call_Product({title,price,image,rating}) {

  return (
    <div className='card'>
      <img src={image}></img>
      <p>{title}</p>
      <p>Price:${price}</p>
      <p>Rating:{rating.rate}</p>
      <button className='btn btn-success'>Buy🛒</button>
      <br></br>
      <button className='btn btn-danger'>Add to Cart </button>
    </div>
  )
}

export default API_Call_Product
