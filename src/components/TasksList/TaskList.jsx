import React from 'react'
import "./TaskListStyle.css"
import Task from '../Task/Task'

function TaskList({ tasks, onDelete }) {
    return (
        <main>
            <h1>First List</h1>
            {tasks.map(task => <Task task={task} onDelete={onDelete} key={task.id}/>)}
        </main>
    )
}

export default TaskList