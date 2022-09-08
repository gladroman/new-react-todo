import { useState } from 'react'
import { useSelector } from 'react-redux'
import './ModalStyle.css'

function Modal({ id, onAddTask, handleToggleModal }) {
    const [task, setTask] = useState({ name: '', due_date: null, descr: '', list_id: '' })
    const [isError, setIsError] = useState(false)
    const dashboard = useSelector(state=>state.dashboard)
    const handleChange = (e) => {
        const { name, value } = e.target
        setTask({ ...task, [name]: value })
    }
    const submitTask = (e) => {
        e.preventDefault()
        if (!task.name) {
            setIsError(true)
        } else {
            onAddTask(task,id)
            handleToggleModal()
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
                    <label >List
                        <select defaultValue="" name="list_id" value={task.list_id} onChange={handleChange}>
                            <option value ="" disabled>Select List</option>
                            {dashboard.lists.map((list) => <option value={list.id} key={list.id}>{list.name}</option>)}
                        </select>
                        </label>
                    <button type='submit'> Submit </button>
                </form>
                <span id='close' onClick={handleToggleModal} >Close</span>
            </div>
        </div>
    )
}

export default Modal