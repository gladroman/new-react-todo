import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { selectDashboard, selectCounterOpenTasks } from '../../store/dashboard/actions'
import { selectTasks } from '../../store/tasks/actions'
import './TodoListSidebarStyle.css'

function TodoListSidebar() {
    const dashboard = useSelector(selectDashboard)

    const openedTasks = useSelector(selectCounterOpenTasks)
    

    const notNull = val => val === null ? 0 : val

    return (
        <aside>
            {dashboard.lists &&
                <ul>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="today"><li>Today: {dashboard.today}</li></NavLink>
                    {dashboard.lists.map(list => <NavLink
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        to={`/todo-list/${list.id}`}
                        key={list.id}>

                        <li>
                            {list.name}
                            ({notNull(openedTasks[list.id])})
                        </li>

                    </NavLink>)}
                </ul>
            }
        </aside>
    )
}

export default TodoListSidebar