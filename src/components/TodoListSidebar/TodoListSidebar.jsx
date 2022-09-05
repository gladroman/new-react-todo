import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './TodoListSidebarStyle.css'

function TodoListSidebar({ dashboard, onSelectList, onSelectToday }) {
    return (
        <aside>
            {dashboard.lists &&
                <ul>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="today"><li>Today: {dashboard.today}</li></NavLink>
                    {dashboard.lists.map(list => <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to ={`/todo-list/${list.id}`} key={list.id}><li>{list.name}({list.undone})</li></NavLink>)}
                </ul>
            }
        </aside>
    )
}

export default TodoListSidebar