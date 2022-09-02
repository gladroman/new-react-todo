import React from 'react'
import './TaskStyle.css'

function Task({ task, onDelete }) {
    const { name, due_date, descr = "No description"} = task
    console.log(descr)
    return (
        <div className="task">
            <p className='date'>{due_date}</p>
            <h3><input type="checkbox" />{name}</h3>
            <p>{descr}</p>
            <span
                onClick={() => {
                    onDelete(task.id)
                }}>
                {'\u274C'}
            </span>
        </div>
    )
}

export default Task