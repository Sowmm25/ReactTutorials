import "./App.css";
import { useState } from "react";

export default function App() {
  //let count=0;
  const[count, setCount]=useState(0);
  //console.log(count)
  function handleAdd(){
    // count+=1;
    // console.log(count)
    //setCount(count+1);
    //setCount(count+1);
    //even if call setcount 3 times value would be increased only once as it would be functioning as 0+1, 0+1, 0+1 because it would only call it in nxt render
   
   // if we need to count it 3 times we need to use functions like
  //  setCount(count=>count+1);
  //  setCount(count=>count+1);
  //  setCount(count=>count+1);
   
    setCount(count+1);
  }
  function handleSub(){
    setCount(count-1);
  }
  function handleReset(){
    setCount(0);

  }
  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">ADD</button>
        {/* we can do the similar thing using anonymous function */}
        {/* <button onClick={()=>setCount(count+1)} className="add2">ADD2</button> */}
        <button onClick={handleSub} className="sub">SUB</button>
         <button onClick={handleReset} className="reset">RESET</button>
      </div>

    </div>
  )
}
