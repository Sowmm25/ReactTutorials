
export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target.task.value);
    // console.log(date);
    if (task.id) {
      const date = new Date();
      const updatedTasklist = tasklist.map((todo) => (todo.id === task.id ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()}${date.toLocaleDateString()}` } : todo));
      setTasklist(updatedTasklist);
      setTask({}); //since task.name is dependednt on this just make task empty string so add bar would not show taskname
    } else {
      const date = new Date();
      const newtask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()}${date.toLocaleDateString()}`
      }
      setTasklist([...tasklist, newtask]);
      //e.target.task.value = "";
      //  instead of this just empty task also this condition can be applied in input field itself
      setTask({});
    }

  }



  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" value={task.name||""} autoComplete="off" placeholder="add task" maxLength="25px" onChange={e=>setTask({...task,name:e.target.value})} />
        <button type="submit">{task.id?"Update":"Add"}</button>
      </form>
    </section>
  )
}
