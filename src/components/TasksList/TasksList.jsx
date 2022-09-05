import React, { useState, useEffect } from 'react'
import "./TaskListStyle.css"
import Task from '../Task/Task'

function TasksList({ list,tasks,deleteTask, updateTask, handleToggleModal }) {
    const [showDone,setShowDone] = useState(false)
    let tasksToRender
    if (!showDone) {
        tasksToRender = tasks.filter(t => !t.done)
    }else{
        tasksToRender= tasks
    }
    if (!list) {
        tasksToRender = tasks.sort((a,b)=> a.due_date - b.due_date)
    }
    const handleShowDone = ()=>{setShowDone(!showDone)}
    return (
        <div>
             {list && <h1>{list && list.name}<span onClick={handleToggleModal} className="create-btn">+</span></h1>}
             {list &&<label ><input checked = {showDone} type="checkbox" onChange={handleShowDone} />Show Done</label>}
            {tasksToRender.map(task => <Task task={task} deleteTask={deleteTask} updateTask={updateTask} key={task.id} />)}
        </div>
    )
}

export default TasksList