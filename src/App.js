import { useEffect, useState, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TodoListPage from './pages/TodoListPage'
import TodayTasksPage from './pages/TodayTasksPage';
import TodoListSidebar from './components/TodoListSidebar/TodoListSidebar';
import { getDashboard } from './axios/axios'
import { useDispatch } from 'react-redux';
import {fetchDashboard} from './store/dashboard/actions'
import { loadTasks } from './store/tasks/actions';


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDashboard)
    },[])
    


    return (

        <div className="App">
            <TodoListSidebar />
            <Routes>
                <Route path="/" element={<h1>Hi :DD</h1>}></Route>
                <Route path="/todo-list/:list_id" element={<TodoListPage/>}></Route>
                <Route path="/today" element={<TodayTasksPage />}></Route>
            </Routes>
        </div>


    );
}

export default App;
