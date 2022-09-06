import React, { useState, useEffect } from 'react'
import "./TaskListStyle.css"
import Task from '../Task/Task'

function TasksList({ list,tasks,deleteTask, updateTask, handleToggleModal }) {
    const [showDone,setShowDone] = useState(false)
    let tasksToRender
    if (!showDone && tasks) {
        tasksToRender = tasks.filter(t => !t.done)
    }else{
        tasksToRender= tasks
    }
    const handleShowDone = ()=>{setShowDone(!showDone)}
    return (
        tasks ? <div>
             {list && <h1>{list && list.name}<span onClick={handleToggleModal} className="create-btn">+</span></h1>}
             {list &&<label ><input checked = {showDone} type="checkbox" onChange={handleShowDone} />Show Done</label>}
            {tasksToRender.map(task => <Task task={task} deleteTask={deleteTask} updateTask={updateTask} key={task.id} />)}
        </div>
        :
        <h1>Loading...</h1>
    
    )
}

export default TasksList