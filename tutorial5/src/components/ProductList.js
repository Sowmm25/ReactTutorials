import React, { useEffect, useState, useCallback } from 'react'
import { useFetch } from '../hooks/useFetch';
import Loading from '../assets/Loading.gif'

export const ProductList = () => {
    // const[products,SetProductList]=useState([]);
    const[url,SetUrl]=useState("http://localhost:8000/products");
    const{data:products,loading,error}=useFetch(url);
    
   
    // const [counter,SetCounter]=useState(0);
    //useEffect is used to make sure it is called one time
    // const fetchProducts=useCallback(async()=>{
    //   const response=await fetch(url);
    //   const data=await response.json();
    //   SetProductList(data);

    // },[url]);
    // useEffect(()=>{
     
    //   //this function is called outside useEffect most of times then url dependency cannot
    //   //be used as it shows some hook related warning we need to add fetchproducts as dependency
    //   //but then it will run multiple times hence to solve this use callback function
    //   fetchProducts();
    //     // console.log("mounted")
    //     // fetch(url)
    //     // .then(responce=>responce.json())
    //     // .then(data=>SetProductList(data))
    // },[fetchProducts]) //this function is called again if count is changed        [count] 
    //the above functione is called once again when url is updated hence addidng it is necessary

    //if I need to do something with counter for ex to use console.log in it I cannont add
    //counter dependecy in the above dependency as it will also change url(data) related stuff
    //when there is change in counter so use another useEffect
    // useEffect(()=>{console.log(counter)},[counter])
  return (
    
    <section>
      {/* <button onClick={()=>SetCounter(counter+1)}>{counter}</button> */}
      <button onClick={()=>SetUrl("http://localhost:8000/products")}>All</button>
      <button onClick={()=>SetUrl("http://localhost:8000/products?in_stock=true")}>In Stock Only</button>
      <h1>Product Name</h1>
      {loading&&<p><img src={Loading}alt='products'/></p>}
      {error&&<p>{error}</p>}
      {products&&products.map((product)=>(
        <div className='card' key={product.id}>
          <p className='id'>{product.id}</p>
        <p className='name'>{product.name}</p>
        <p className='info'>
          <span>{product.price}</span>
         <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
          
        </p>
        </div>

      ))}
    </section>
  )
}
