import React from 'react'

// export const TaskCard = (props) => {
//   return (
// <>
// <li key={props.task.id}>
//                     <span>{props.task.id}-{props.task.name}</span>

//                     <button onClick={()=>props.handleDelete(props.task.id)} className="delete">Delete</button>
//                 </li>
// </>
export const TaskCard = ({ task, handleDelete }) => {
  return (
    <>

      <li key={task.id}>
        <span>{task.id}-{task.name}</span>

        <button onClick={() => handleDelete(task.id)} className="delete">Delete</button>
      </li>
    </>
  )
}
