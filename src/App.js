import { useEffect, useState } from 'react';
import './App.css';
import TaskList from './components/TasksList/TaskList';
import TodoListSidebar from './components/TodoListSidebar/TodoListSidebar';
import Modal from './components/Modal/Modal';

const defaultTasks = [
    {
        "id": 1,
        "name": "First Task",
        "due_date": "2022-09-01T21:00:00.000Z",
        "done": true,
        "list_id": 2,
        "descr": null
    },
    {
        "id": 28,
        "name": "My first task created on front",
        "due_date": "2022-09-03T21:00:00.000Z",
        "done": true,
        "list_id": 2,
        "descr": "something"
    },
    {
        "id": 3,
        "name": "third task",
        "due_date": "2022-08-01T21:00:00.000Z",
        "done": false,
        "list_id": 2,
        "descr": null
    },
    {
        "id": 5,
        "name": "fifth task",
        "due_date": null,
        "done": false,
        "list_id": 2,
        "descr": null
    }
]
function App() {
    const [tasks, setTasks] = useState(defaultTasks)
    const [isModalActive,  setIsModalActive] = useState(false)

    const onDelete = (id) => {
        setTasks([...tasks.filter(task => task.id !== id)])
    }
    function handleToggleDone(id) {
        const newTasks = tasks.map((task) => task.id === id ? {...task, done: !task.done}: task )
        setTasks(newTasks)

    }
    const addTask=(newTask)=>{
        setTasks([...tasks,newTask])
        handleToggleModal()
    }
    const  handleToggleModal= () => setIsModalActive(!isModalActive)
return (
    <div className="App">
        <TodoListSidebar />
        <TaskList tasks={tasks} onDelete={onDelete} handleToggleModal={handleToggleModal} handleToggleDone={handleToggleDone} />
        {isModalActive&&<Modal addTask={addTask} handleToggleModal={handleToggleModal}/>}
    </div>
);
}

export default App;
