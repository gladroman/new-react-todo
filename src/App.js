import { useState } from 'react';
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
            "due_date": "2022-09-01T21:00:00.000Z",
            "done": false,
            "list_id": 2,
            "descr": null
        },
        {
            "id": 5,
            "name": "fifth task",
            "due_date": "2022-08-30T21:00:00.000Z",
            "done": false,
            "list_id": 2,
            "descr": null
        }
    ])
    return (
        <div className="App">
            <TodoListSidebar />
            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;
