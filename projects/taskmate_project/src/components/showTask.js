import React from 'react'

export const ShowTask = ({tasklist,setTasklist,task,setTask}) => {
  // const tasks=[
  //  { id:1001,name:"Task A",time:"13:24 PM 05-03-2024"},
  //  {id:1002,name:"Task B",time:"13:24 PM 05-03-2024"},
  //  {id:1003,name:"Task C",time:"13:24 PM 05-03-2024"}];

   const handleUpdate=(id)=>{
    const selectedTask=tasklist.find(todo=>todo.id===id);
    console.log(selectedTask);
    setTask(selectedTask);

   }
   const handleDelete=(id)=>{
    const updatedTaskList=tasklist.filter(todo=>todo.id!==id)
    setTasklist(updatedTaskList)
   }
  return (
    <section className='showTask'>
      <div className='head'>
        <div>
        <span className='title'>Todo</span>
        <span className='count'>{tasklist.length}</span>
        </div>
        <button className='clearAll' onClick={()=>setTasklist([])}>clear All</button>
      </div>
      <ul>
        {tasklist.map((todo)=>(
          <li key={todo.id}> 
           {/* //the task.id used is from map(task) not the state task the scope is different this is
          // mapping task from tasklist while the other is the state task */}
          <p>
            <span className='name'>{todo.name} </span>
            <span className='time'>{todo.time}</span>
          </p>
          <i onClick={()=>handleUpdate(todo.id)}className="bi bi-pencil-square"></i>
          <i onClick={()=>handleDelete(todo.id)} className='bi bi-trash-fill'></i>
        </li>

        ))}
        
      </ul>
    </section>
  )
}
