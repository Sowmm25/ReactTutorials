import React from 'react'
import {Routes,Route, Navigate} from "react-router-dom";
import { Admin, Contact,ContactEu,ContactIn,ContactUs,Home,PageNotFound,ProductDetails,ProductList } from "../pages"
export const AllRoutes = () => {
    const user=true;
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="products" element={<ProductList/>}></Route>
    <Route path="products/:id" element={<ProductDetails/>}></Route> 
    {/* :id is dynamic value */}
    <Route path="contact" element={<Contact/>}>
      <Route path="in" element={<ContactIn/>}/>
      <Route path="eu" element={<ContactEu/>}/>
      <Route path="us" element={<ContactUs/>}/>
      <Route path="*" element={<PageNotFound/>} />
    </Route>
    <Route path="/admin" element={user?<Admin/>:<Navigate to="/"/>}/>
    <Route path="*" element={<PageNotFound/>}/>
    {/* if page entered is not found */}
  </Routes>
  </>
    
  )
}
