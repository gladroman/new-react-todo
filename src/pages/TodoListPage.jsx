import { useState } from 'react'
import { useParams } from 'react-router-dom'
import TasksList from '../components/TasksList/TasksList'
import Modal from '../components/Modal/Modal'
import useTasks from '../hooks/UseTasks'

function TodoListPage( { dashboard }) {
    const { id } = useParams()
    const { tasks, addTask, deleteTask, updateTask } = useTasks(`http://localhost:3334/lists/${id}/tasks?all=true`)
    const [isModalActive, setIsModalActive] = useState(false)
    const list = dashboard.lists.filter((list)=>list.id == id)[0]
    const handleToggleModal = () => setIsModalActive(!isModalActive)
  return (
    <main>
        <TasksList
                    list={list}
                    tasks={tasks}
                    deleteTask={deleteTask}
                    updateTask={updateTask} 
                    handleToggleModal={handleToggleModal}/>
                    

        {isModalActive && <Modal 
                            dashboard={dashboard} 
                            addTask={addTask} 
                            handleToggleModal={handleToggleModal} />}            
    </main>
    
    
  )
}

export default TodoListPage