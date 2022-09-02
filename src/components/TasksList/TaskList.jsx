import React from 'react'
import "./TaskListStyle.css"
import Task from '../Task/Task'

function TaskList({ tasks }) {
    return (
        <main>
            <h1>First List</h1>
            {tasks.map(task => <Task task={task} />)}
        </main>
    )
}

export default TaskList