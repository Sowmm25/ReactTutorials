import { useState, useRef } from "react"
import "./Addtask.css"

export const Addtask = ({tasks,setTasks}) => {
  const [taskValue, SettaskValue] = useState("");
  const [completedValue, SetCompleted] = useState("");
  // const taskRef=useRef("");   useRef can be used as reference but it cannon render(i.e return will not be applicable)
  // const handleChange=(event)=>{
  //   // console.log(event.target.value)
  //   SettaskValue(event.target.value);
  // }
  const handleSubmit = (event) => {
    event.preventDefault(); //to prevent refresh
    
    const task = {
      id: Math.floor(Math.random() * 10),
      name: taskValue,
      completed: Boolean(completedValue)
    }
    console.log([task])
    setTasks([...tasks,task])
    SettaskValue("");
    SetCompleted(false);
  }
  return (
    <section className="addtask">

      <form onSubmit={handleSubmit}>
        <label htmlFor="task">TaskName </label>
        {/* <input onChange={handleChange} type="text" name="task" id="task" placeholder="Task Name"/> */}
        <input onChange={(e) => { SettaskValue(e.target.value) }}  type="text" name="task" id="task" placeholder="Task Name" value={taskValue} />
        <select onChange={(e) => { SetCompleted(e.target.value) }} value={completedValue}>
          <option value={false}>Pending</option>
          <option value={true}>completed</option>
        </select>
        <button onClick={(e) => { SettaskValue(""); SetCompleted(false) }}   className="resettaskbutton" type="submit">Reset</button>
        <button    className="addtaskbutton" type="submit" >Add Task</button>

      </form>

      <p>{taskValue}</p>
    </section>
  )
}


// onChange={(e)=>console.log(taskRef.current.value)}  ref={taskRef}
//onClick={(e)=>{taskRef.current.value=" ";SetCompleted(false)}}