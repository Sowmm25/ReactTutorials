import { useNavigate, Outlet } from 'react-router-dom'
import React from 'react'

export const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("-----");
    navigate("/")
  }
  return (
    <>
    <main>
      <div className='component'>Contact</div>
      <Outlet />
      <button className='homeButton' onClick={handleSubmit}>Back to Home</button>
      </main>

    </>
  )
}


export const ContactIn = () => {
  return (
    <div className='component'>Contact India</div>
  )
}


export const ContactEu = () => {
  return (
    <div className='component'>Contact Europe</div>
  )
}


export const ContactUs = () => {
  return (
    <div className='component'>Contact US</div>
  )
}


