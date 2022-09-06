import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TaskStyle.css'

const defaultEditState = {name:false,due_date:false,descr:false}

function Task({ task, deleteTask, updateTask }) {
    const [isEdit, setIsEdit] = useState(defaultEditState)
    let { name, done, due_date, descr } = task
    const [body,setBody] = useState({})
    let taskClass = 'task'
    const today = (new Date()).setUTCHours(0, 0, 0, 0);

    descr = descr || "No description"

    due_date = due_date ? toDate(due_date) : "No Date"

    taskClass += done ? " done" : today > due_date ? " overdue" : ''

    due_date = due_date instanceof Date ? due_date.toISOString().split('T')[0] : due_date

    function toDate(date) {
        date = new Date(date)
        date.setTime(date.getTime() + (3 * 60 * 60 * 1000))
        return date
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setBody({[name]: value })
    }
    const submitForm = (e) => {
        e.preventDefault()
        updateTask(task,body)
        setIsEdit(defaultEditState)

    }

    const editTask=(e)=>{
        const  name  =  e.target.dataset.name
        setBody({[name]:task[name]})
        setIsEdit({...isEdit,[name]:!isEdit[name]})
    }
    
    useEffect(() => {
        function handleEscapeKey(e) {
          if (e.code === 'Escape') {
            setIsEdit(defaultEditState)
          }
        }
      
        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
      }, [])
    return (
        
                <div className = { taskClass }>
                    {isEdit.due_date ?
                                        <form onSubmit={submitForm}>
                                            <input type = "date" name="due_date" placeholder={due_date}  value={body.due_date} onChange={handleChange}></input>
                                            <button type="submit" >Submit Date</button>
                                        </form>
                                        : 
                                        < p onDoubleClick={editTask} data-name="due_date" className = 'date' > { due_date }</p >}

                    {isEdit.name ? <form  onSubmit={submitForm}>
                                            <input type = "text" name="name" value={body.name} onChange={handleChange}></input>
                                            <button type="submit" >Submit Name</button>
                                        </form>
                                        :
                                        <h3 data-name="name" onDoubleClick={editTask}>
                                            <input
                                                type="checkbox"
                                                checked = {done}
                                                onChange={()=>{
                                                    updateTask(task,{done: !done})
                                                }}
                                                />{name}
                                        </h3>}
                    {isEdit.descr ? <form onSubmit={submitForm}>
                                            <input type = "text" name="descr" placeholder={descr}  value={body.descr} onChange={handleChange}></input>
                                            <button type="submit" >Submit Description</button>
                                        </form>
                                        :
                                        <p data-name = "descr" onDoubleClick={editTask}>{descr}</p>}
                    
                    <span className='task-close-btn'
                        onClick={() => {
                            deleteTask(task)
                        }}>
                        {'\u274C'}
                    </span>
                    {task.list && <Link to={`/todo-list/${task.list.id}`}> <label className='list-label'>{task.list.name}</label></Link>}
                </div >

        
    )
}

export default Task