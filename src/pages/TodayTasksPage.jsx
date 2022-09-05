import React from 'react'
import TasksList from '../components/TasksList/TasksList'
import useTasks from '../hooks/UseTasks'

function TodayTasksPage() {
    const { tasks, deleteTask, updateTask } = useTasks(`http://localhost:3334/collection/today`)
    console.log(tasks)
    return (
        <main>
            <TasksList
                tasks={tasks}
                deleteTask={deleteTask}
                updateTask={updateTask}/>
        </main>
    )
}

export default TodayTasksPage