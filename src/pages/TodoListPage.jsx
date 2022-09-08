import { useState } from 'react'
import { useParams } from 'react-router-dom'
import TasksList from '../components/TasksList/TasksList'
import Modal from '../components/Modal/Modal'
import useTasks from '../hooks/UseTasks'

function TodoListPage( { dashboard }) {
    let { list_id} = useParams()
    list_id =Number(list_id)
    const { tasks, onAddTask, onDeleteTask, onUpdateTask } = useTasks(list_id)
    const [isModalActive, setIsModalActive] = useState(false)
    const handleToggleModal = () => setIsModalActive(!isModalActive)
  return (
    <main>
        <TasksList
                    list_id={list_id}
                    tasks={tasks}
                    onDeleteTask={onDeleteTask}
                    onUpdateTask={onUpdateTask} 
                    handleToggleModal={handleToggleModal}/>
                    

        {isModalActive && <Modal 
                            list_id={list_id}
                            onAddTask={onAddTask} 
                            handleToggleModal={handleToggleModal} />}            
    </main>
    
    
  )
}

export default TodoListPage