import { useState } from 'react'
import './ModalStyle.css'

function Modal({ dashboard, addTask, handleToggleModal }) {
    const [task, setTask] = useState({ name: '', due_date: '', descr: '' ,list_id:''})
    const [isError, setIsError] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target
        setTask({ ...task, [name]: value })
    }
    const submitTask = (e) => {
        e.preventDefault()
        if (!task.name) {
            setIsError(true)
        } else {
            addTask(task)
        }
    }
    return (
        <div className='modal'>
            <div className="modal-content">
                <form onSubmit={submitTask}>
                    {isError ?
                        <label className="error">Name is required</label>
                        :
                        <label >Name</label>}

                    <input name="name" type="text" placeholder="Tasks's name.." value={task.name} onChange={handleChange} />

                    <label >Deadline<input name="due_date" type="date" value={task.due_date} onChange={handleChange} /></label>

                    <label >Description<input name="descr" type="text" placeholder="Description..." value={task.descr} onChange={handleChange} /></label>

                    <select name="list_id" value={task.list_id} onChange={handleChange}>
                        {dashboard.lists.map((list)=><option value={list.id}>{list.name}</option>)}
                    </select>
                    <button type='submit'> Submit </button>
                </form>
                <span id='close' onClick={handleToggleModal} >Close</span>
            </div>
        </div>
    )
}

export default Modal