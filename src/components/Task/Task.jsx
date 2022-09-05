import React from 'react'
import { Link } from 'react-router-dom';
import './TaskStyle.css'

function Task({ task, deleteTask,updateTask }) {
    let { name, done, due_date, descr } = task
    let taskClass = 'task'
    const today = (new Date()).setUTCHours(0, 0, 0, 0);

    descr = descr || "No description"

    due_date = due_date ? toDate(due_date) : "No Date"

    taskClass += done ? " done" : today > due_date ? " overdue" : ''

    due_date = due_date instanceof Date ? due_date.toISOString().split('T')[0] : due_date

    function toDate(date) {
        date = new Date(date)
        date.setTime(date.getTime()+(3*60*60*1000))
        return date
    }

    return (
        <div className={taskClass}>
            <p className='date'>{due_date}</p>
            <h3>
                <input
                    type="checkbox"
                    checked = {done}
                    onChange={()=>{
                        updateTask(task)
                    }}
                    />{name}
            </h3>
            <p>{descr}</p>
            <span
                onClick={() => {
                    deleteTask(task)
                }}>
                {'\u274C'}
            </span>
           {task.list && <Link to={`/todo-list/${task.list.id}`}> <label className='list-label'>{task.list.name}</label></Link>
            }
        </div>
    )
}

export default Task