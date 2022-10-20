import React from 'react'
import {FaTimesCircle} from "react-icons/fa"

const ShowTask = ({tasks, setTasks}) => {
  console.log(tasks);
  const toggleDone =(id) =>{
    setTasks(
      tasks.map((task) => task.id===id ? {...task, isDone: !task.isDone} : task )
    )
  }
  const deleteTask =(id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }
  
  
  return (
    <div>
    {tasks.map((task) => {
      const {id, task: text, day, isDone} = task;
      return(
        <div
        onDoubleClick ={() => toggleDone(id)}
        key={id}
        className={`task ${isDone ? "done" : ''}`}>

        <h3>{text}

      <FaTimesCircle style = {{color: "red"}} onClick={()=>deleteTask(id) }/></h3>
        </div>
        

      
    )})}
    </div>
  )
}

export default ShowTask