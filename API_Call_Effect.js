  import React, { useEffect, useState } from 'react'
  import API_Call_Product from './API_Call_Product'
  import './API_Call.css'
  
  function API_Call_Effect() {

    const [products,setProducts] = useState([])

    useEffect(()=>{
        getProducts()           
    },[])

    async function getProducts(){
        let res = await fetch('https://fakestoreapi.com/products')
        let productList =await res.json()
        setProducts(productList)
        //console.log(productList)
    }

    if(products.length === 0){
        return (<h1>Fetching Data...</h1>)
    }

    return (
      <div className='product-list'>
        {
            products.map((p)=><API_Call_Product key={p.id} {...p}></API_Call_Product>)
        }
      </div>
    )
  }
  
  export default API_Call_Effect
  