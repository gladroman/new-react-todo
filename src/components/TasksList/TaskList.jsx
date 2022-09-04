import React from 'react'
import "./TaskListStyle.css"
import Task from '../Task/Task'

function TaskList({ tasks, onDelete , handleToggleDone, handleToggleModal}) {
    return (
        <main>
            <h1>First List <span onClick={handleToggleModal} className="create-btn">+</span> 
            </h1>
            {tasks.map(task => <Task task={task} onDelete={onDelete} handleToggleDone={handleToggleDone} key={task.id}/>)}
        </main>
    )
}

export default TaskList