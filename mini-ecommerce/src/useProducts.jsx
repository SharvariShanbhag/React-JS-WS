import React, { useEffect, useState } from 'react'

const useProducts = (apiKeLiyeURL) => {
  const[products, setProducts] =useState([])
  const [loading, setLoading]=useState(true)

  async function fetchAPI(){
    try{
      await fetch(apiKeLiyeURL)
      .then(response => response.json())
      .then(data =>setProducts(data))
      setLoading(false)
    }catch (error){
      console.log(error,"Error while fetching");
    }
    
  }

  useEffect(()=>{
    fetchAPI();
  },[])

function deleteBtn(id){
  setProducts(products.filter((p)=> p.id !== id))
}

  return {products,loading,setProducts,deleteBtn};
}

export default useProducts