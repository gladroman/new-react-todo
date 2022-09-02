import React from 'react'
import './TaskStyle.css'

function Task({ task, onDelete }) {
    let { id, name, done, due_date, descr } = task
    let taskClass = 'task'
    const now = (new Date()).setUTCHours(23,59,59,999);

    descr = descr || "No description"

    due_date = due_date ? new Date(due_date) : "No Date"

    taskClass += done ? " done" : now > due_date ? " overdue" : ''

    due_date = due_date instanceof Date ? due_date.toISOString().split('T')[0] : due_date

    return (
        <div className={taskClass}>
            <p className='date'>{due_date}</p>
            <h3><input type="checkbox" />{name}</h3>
            <p>{descr}</p>
            <span
                onClick={() => {
                    onDelete(id)
                }}>
                {'\u274C'}
            </span>
        </div>
    )
}

export default Task