import React from 'react';
import {useState} from 'react';
import {TaskCard} from './TaskCard';
import {BoxCard} from './BoxCard';


    export const TaskList = (props) => {
        const[tasks, setTasks]=useState([{id:1, name:"Record Lectures", completed:false},{id:2,name:"edit React Lectures",completed:false},{id:3,name:"Watch Lectures", completed:false}])
       
        const[show,setShow]=useState(true);//conditional template
        function handleDelete(id){
         //console.log(id)
         setTasks(tasks.filter(task=>id!==task.id)) 
         //the tasks id much not match if it matches then remove it is the condition
        }
        // console.log(setTasks(tasks.filter(task=>id!==task.id))) 
        // console.log(id)
    return (
    
    <>
    {/* <h1>Task List{props.title}{props.subtitle}</h1> */}
            <ul>
                <div className='tbutton'>
                <h2>Tasks</h2>
                <button className="toggle" onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
                </div>
                {show &&tasks.map((task)=>(
                    // <li key={task.id}>
                    //     <span>{task.id}-{task.name}</span>
                        
                    //     <button onClick={()=>handleDelete(task.id)} className="delete">Delete</button>
                    // </li>
                    <TaskCard key={task.id}task={task} handleDelete={handleDelete}/>
                    ))}
                   
                
                
            </ul>
            {/* <BoxCard/>  */}
            {/* Make sure to pascal case like BoxCard not boxCard if not react will not render
            */}
            {/* <p>Hiii</p>
            <BoxCard result="success">
                <p>Hi</p>
            <p className="title">Lorem ipsulm hiljk.h.kjhfhgfgfdsfsdfsf</p>
            <p className="description">Lorem10</p>
            </BoxCard>
            <BoxCard result="alert">
            <p className="title">Lorem ipsulm</p>
            <p className="description">Lorem10</p>
            </BoxCard>
            <BoxCard className="warning">
            <p className="title">Lorem ipsulm</p>
    <p className="description">Lorem10</p>

            </BoxCard> */}
            </>
    
  )
                }