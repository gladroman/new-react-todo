import React from 'react'
import './TaskStyle.css'

function Task({ task }) {
    const { name, due_date, descr } = task
    return (
        <div className="task">
            <p className='date'>{due_date}</p>
            <h3><input type="checkbox" />{name}</h3>
            <p>{descr}</p>
            <span >{'\u274C'}</span>
        </div>
    )
}

export default Task