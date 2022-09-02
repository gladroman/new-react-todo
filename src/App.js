import { useEffect, useState } from 'react';
import './App.css';
import TaskList from './components/TasksList/TaskList';
import TodoListSidebar from './components/TodoListSidebar/TodoListSidebar';


function App() {
    const [tasks, setTasks] = useState([
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
    ])
    const onDelete = (id)=> {
        setTasks([...tasks.filter(task => task.id !== id)])
    }
    return (
        <div className="App">
            <TodoListSidebar />
            <TaskList tasks={tasks} onDelete={onDelete} />
        </div>
    );
}

export default App;
