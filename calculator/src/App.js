import React, { useState } from 'react'
import './App.css';

export const App = () => {
     const[result,SetResult]=useState(null);
     const[num1,SetNum1]=useState('');
     const[num2,SetNum2]=useState('');
     function handleInput(input,fieldName){
      if(fieldName=="num1"){
        SetNum1(input)
      }
      else if(fieldName=="num2"){
        SetNum2(input)

      }

     }
    
    
    function handleAdd(num1,num2){
      const parsenum1=parseFloat(num1);
      const parsenum2=parseFloat(num2);
      if(!isNaN(parsenum1)&&!isNaN(parsenum2)){
      const res=parsenum1+parsenum2;
      SetResult(res);
      }
    }

    function handleSub(num1,num2){
      const parsenum1=parseFloat(num1);
      const parsenum2=parseFloat(num2);
      if(!isNaN(parsenum1)&&!isNaN(parsenum2)){
        const res=parsenum1-parsenum2;
        SetResult(res);
      }

    }

    function handleMul(num1,num2){
      const parsenum1=parseFloat(num1);
      const parsenum2=parseFloat(num2);
      if(!isNaN(parsenum1)&&!isNaN(parsenum2)){
        const res=parsenum1*parsenum2;
        SetResult(res);
      }

    }
    function handleDiv(num1,num2){
      const parsenum1=parseFloat(num1);
      const parsenum2=parseFloat(num2);
      if(!isNaN(parsenum1)&&!isNaN(parsenum2)){
        const res=parsenum1/parsenum2;
        SetResult(res);
      }

    }
  return (
    <div>
        <h1>Calculator</h1>
        <form>
        <input className='num1' id='num1' name='num1' type='text' onChange={(e)=>handleInput(e.target.value,'num1')}/>
        <br/>
        
        <input className='num2' id='num2' name='num2' type='text' onChange={(e)=>handleInput(e.target.value,'num2')}/>
        <br/>
        <div className='button1'>
        <button className='add' onClick={()=>handleAdd(num1,num2)}>+</button>
        <button className='sub' onClick={()=>handleSub(num1,num2)}>-</button>
        </div>
        <br/>
        <div className='button2'>
        <button className='mul' onClick={()=>handleMul(num1,num2)}>*</button>
        <button className='div' onClick={()=>handleDiv(num1,num2)}>/</button>
        </div>
        <p className='res'>{result}</p>
        </form>

    </div>
  )
}
