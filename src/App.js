import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import TaskList from './components/TasksList/TaskList';
import TodoListSidebar from './components/TodoListSidebar/TodoListSidebar';
import Modal from './components/Modal/Modal';
import { getTasks, createTask, getDashboard, patchTask, deleteTask,getTodayTasks } from './axios/axios';

const initialStateList = JSON.parse(window.localStorage.getItem('Selected List'))||null

function App() {
    const [tasks, setTasks] = useState([])
    const [dashboard, setDashboard] = useState({ today: null, lists: [] })
    const [isModalActive, setIsModalActive] = useState(false)
    const [selectedList, setSelectedList] = useState(initialStateList)

    useEffect(()=>{
        getTasks(selectedList.id).then(res => setTasks(res))
    },[selectedList])

    useEffect(() => {
        getDashboard().then(res => setDashboard(res))
    },[tasks])

    const onDelete = async (taskToDel) => {
        try {
            await deleteTask(taskToDel)
            setTasks([...tasks.filter(task => task.id !== taskToDel.id)])
        } catch (e) {
            console.log('АШИПКА')
        }
    }
    async function handleToggleDone(modTask) {
        try {
            await patchTask(modTask, { done: !modTask.done })
            const newTasks = tasks.map((task) => task.id === modTask.id ? { ...task, done: !task.done } : task)
            setTasks(newTasks)
        } catch (e) {

        }
    }
    const addTask = async (newTask) => {
        try {
            const result = await createTask(newTask)
            setTasks([...tasks, result])
            handleToggleModal()
        } catch (e) {
            console.log('АШИПКА')
        }

    }
    getTodayTasks().then(data=>console.log(data))

    const onSelectList = (list) => {
        window.localStorage.setItem('Selected List', JSON.stringify(list));
        setSelectedList(list)
    }

    const handleToggleModal = () => setIsModalActive(!isModalActive)

    return (

        <div className="App">
            <TodoListSidebar dashboard={dashboard} onSelectList={onSelectList} />
            <Routes>
                <Route path="/" element={<h1>Hi :DD</h1>}></Route>
                <Route path="/todo-list/:id" element={<TaskList
                    selectedList={selectedList}
                    tasks={tasks}
                    onDelete={onDelete}
                    handleToggleModal={handleToggleModal}
                    handleToggleDone={handleToggleDone}/>}></Route>

            </Routes>

            {isModalActive && <Modal dashboard={dashboard} addTask={addTask} handleToggleModal={handleToggleModal} />}
        </div>
    );
}

export default App;
