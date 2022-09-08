import React from 'react'
import TasksList from '../components/TasksList/TasksList'
import useTasks from '../hooks/UseTasks'

function TodayTasksPage() {
    const { tasks, onDeleteTask, onUpdateTask } = useTasks()
    return (
        <main>
            <TasksList
                tasks={tasks}
                oneleteTask={onDeleteTask}
                onUpdateTask={onUpdateTask}/>
        </main>
    )
}

export default TodayTasksPage