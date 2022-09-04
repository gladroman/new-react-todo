import React, { useEffect } from 'react'
import "./TaskListStyle.css"
import Task from '../Task/Task'

function TaskList({ selectedList, tasks, onDelete, handleToggleDone, handleToggleModal, onPageUpdate }) {
    return (
        <main>
            <h1>{selectedList.name} <span onClick={handleToggleModal} className="create-btn">+</span> </h1>
            {tasks.map(task => <Task task={task} onDelete={onDelete} handleToggleDone={handleToggleDone} key={task.id} />)}
        </main>
    )
}

export default TaskList