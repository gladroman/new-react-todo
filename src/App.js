import { useEffect, useState } from 'react';
import './App.css';
import TaskList from './components/TasksList/TaskList';
import TodoListSidebar from './components/TodoListSidebar/TodoListSidebar';
import Modal from './components/Modal/Modal';
import axios from 'axios';
import { getTasks, createTask, getDashboard ,patchTask } from './axios/axios';


function App() {
    const [tasks, setTasks] = useState([])
    const [dashboard,setDashboard] = useState({today:null,lists:[]})
    const [isModalActive,  setIsModalActive] = useState(false)


    useEffect(()=>{
        getDashboard().then(res=>setDashboard(res))
    },[tasks])
    useEffect(()=>{
        getTasks(2).then(res=>setTasks(res))
    },[])
    

    const onDelete = (id) => {
        setTasks([...tasks.filter(task => task.id !== id)])
    }
    async function handleToggleDone(modTask) {
        try {
            await patchTask(modTask,{done:!modTask.done})
            const newTasks = tasks.map((task) => task.id === modTask.id ? {...task, done: !task.done}: task )
            setTasks(newTasks)
        } catch (e) {
            console.log('АШИПКА')
        }
        
        

    }
    const addTask=async (newTask)=>{
        try {
            const result = await createTask(newTask)
            setTasks([...tasks,result])
            handleToggleModal()
        } catch (e) {
            console.log('АШИПКА')
        }
        
    }
    const  handleToggleModal= () => setIsModalActive(!isModalActive)
return (
    <div className="App">
        <TodoListSidebar dashboard={dashboard}/>
        <TaskList tasks={tasks} onDelete={onDelete} handleToggleModal={handleToggleModal} handleToggleDone={handleToggleDone} />
        {isModalActive&&<Modal dashboard= {dashboard} addTask={addTask} handleToggleModal={handleToggleModal}/>}
    </div>
);
}

export default App;
