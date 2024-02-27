import React
    from "react";
import { useState } from 'react';
import "./App.css";
import { Header } from "./components/header";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/footer";
import { Addtask } from "./components/Addtask";

function App() {
    // const[tasks, setTasks]=useState([{id:1, name:"Record Lectures", completed:false},{id:2,name:"edit React Lectures",completed:false},{id:3,name:"Watch Lectures", completed:false}])
    const [tasks, setTasks] = useState([{ id: 1, name: "Record Lectures", completed: false },
    { id: 2, name: "edit React Lectures", completed: false },
    { id: 3, name: "Watch Lectures", completed: false }])

    // const[show,setShow]=useState(true);//consitional template
    // function handleDelete(id){
    //  //console.log(id)
    //  setTasks(tasks.filter(task=>id!==task.id)) //the tasks id much not match if it matches then remove it is the condition
    //  console.log(setTasks(tasks.filter(task=>id!==task.id))) 
    //  console.log(id)
    //  //console.log(tasks(id.name));

    //  //the tasks id much not match if it matches then remove it is the condition  
    //   }
    return (
        <div className="App">
            <Header />
            <main>
            <Addtask tasks={tasks} setTasks={setTasks}/>
            <TaskList tasks={tasks} setTasks={setTasks} title=" Random" subtitle=" Test" />
            {/* //title is properties to use this make use of props        */}
            {/* <h1>Task List</h1>
            <ul>
                <button className="toggle" onClick={()=>setShow(!show)}>Toggle</button>
                {show &&tasks.map((task)=>(
                    <li key={task.id}>
                        <span>{task.id}-{task.name}</span>
                        
                        <button onClick={()=>handleDelete(task.id)} className="delete">Delete</button>
                    </li>
                    ))}
                
                
            </ul> */}
            </main>
            <Footer />

        </div>

    );
}
export default App;