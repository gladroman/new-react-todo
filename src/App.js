import { useEffect, useState, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TodoListPage from './pages/TodoListPage'
import TodayTasksPage from './pages/TodayTasksPage';
import TodoListSidebar from './components/TodoListSidebar/TodoListSidebar';
import { getDashboard } from './axios/axios'


function App() {

    const [dashboard, setDashboard] = useState({ today: null, lists: [] })



    useEffect(() => {
        getDashboard().then(res => setDashboard(res))
    },[])


    return (

        <div className="App">
            <TodoListSidebar dashboard={dashboard} />
            <Routes>
                <Route path="/" element={<h1>Hi :DD</h1>}></Route>
                <Route path="/todo-list/:id" element={<TodoListPage dashboard={dashboard} />}></Route>
                <Route path="/today" element={<TodayTasksPage />}></Route>
            </Routes>
        </div>


    );
}

export default App;
