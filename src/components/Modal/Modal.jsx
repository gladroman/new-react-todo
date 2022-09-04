import { useState } from 'react'
import './ModalStyle.css'

function Modal({addTask, handleToggleModal}) {
    const [task, setTask] = useState({ name: '', due_date: '', descr: '' })
    const [isError, setIsError] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target
        setTask({ ...task, [name]: value })
    }
    const submitTask = (e) => {
        e.preventDefault()
        if (!task.name) {
            setIsError(true)
        }else{
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

                    {/* <select value={task.name}>
                        <option>List 1</option>
                        <option>List 2</option>
                        <option>List 3</option>
                    </select> */ }
                    <button type='submit'> Submit </button>
                </form>
                <span id='close' onClick={handleToggleModal} >Close</span>
            </div>
        </div>
    )
}

export default Modal