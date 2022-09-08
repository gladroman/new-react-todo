import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { createSelector } from 'reselect'
import './TodoListSidebarStyle.css'

function TodoListSidebar() {
    const dashboard = useSelector(state => state.dashboard)

    const customSelector = createSelector (
        state => state.dashboard.openedTasks,
        state => state.tasks,
        (openedTasks,tasks) => {
            const obj = {}
            const res = Object.keys(tasks).map(list_id=>{
                obj[list_id] = tasks[list_id].reduce((accum,task)=>accum += task.done ? 0 : 1,0)
            })
            return obj
        }
    )
    const openedTasks = useSelector(customSelector)
    console.log(openedTasks)

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
                            ({dashboard.openedTasks[list.id]})
                        </li>

                    </NavLink>)}
                </ul>
            }
        </aside>
    )
}

export default TodoListSidebar