import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import React from 'react'
//<></>  fragments
//</>className='font1'>
{/* <h1>{username}</h1>
<p>It's good day today!</p> */}
export default function App() { //start function's name with capital letter
  const username="Hi"
    return (
        <> 
    <Header/>
    <div className='font1'> 
        <h1>Hi</h1>    
        <h1>{username}</h1>
<p>It's good day today!</p> 
    </div>
    <Footer/>
    </>
  )
//return React.createElement("h1",{className:"font1"},"font1")
}
