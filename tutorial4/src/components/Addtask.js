import "./Addtask.css"

export const Addtask = () => {
  return (
    <section className="addtask">
        
        <form>
            <label htmlFor="task">TaskName </label>
            <input type="text" name="task" id="task" placeholder="Task Name"></input>
            <button className="addtaskbutton" type="submit">Add Task</button>
        </form>
    </section>
  )
}
