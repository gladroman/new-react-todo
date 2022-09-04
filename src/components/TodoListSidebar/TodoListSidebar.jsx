import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './TodoListSidebarStyle.css'

function TodoListSidebar({ dashboard, onSelectList}) {
    return (
        <aside>
            {dashboard.lists &&
                <ul>
                    <Link to="today"><li>Today: {dashboard.today}</li></Link>
                    {dashboard.lists.map(list => <Link to ={`/todo-list/${list.id}`} key={list.id}><li onClick={()=>onSelectList(list)}>{list.name}({list.undone})</li></Link>)}
                </ul>
            }
        </aside>
    )
}

export default TodoListSidebar