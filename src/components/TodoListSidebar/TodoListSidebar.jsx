import React from 'react'
import './TodoListSidebarStyle.css'

function TodoListSidebar({ dashboard }) {
    return (
        <aside>
            {console.log(dashboard)}
            {dashboard.lists &&
                <ul>
                    <li>Today: {dashboard.today}</li>
                    {dashboard.lists.map(list => <li key={list.id}>{list.name}({list.undone})</li>)}
                </ul>
            }
        </aside>
    )
}

export default TodoListSidebar