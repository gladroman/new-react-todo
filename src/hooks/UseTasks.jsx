import { useState, useEffect } from 'react'
import { getTasks, createTask, patchTask, deleteTaskFromDB } from '../axios/axios';


function useTasks(endpoint) {
    const [ tasks, setTasks ] = useState([])

    useEffect(() => {
        getTasks(endpoint).then(res => setTasks(res))
    }, [endpoint])


    const addTask = async (newTask) => {
        try {
            const result = await createTask(newTask)
            setTasks([...tasks, result])

        } catch (e) {
            console.log('АШИПКА')
        }

    }

    const deleteTask = async (taskToDel) => {
        try {
            await deleteTaskFromDB(taskToDel)
            setTasks([...tasks.filter(task => task.id !== taskToDel.id)])
        } catch (e) {
            console.log('АШИПКА')
        }
    }

    const updateTask = async (task, body) => {
        const {id} = task
        try {
            await patchTask(task, body)
            const newTasks = tasks.map((task) => task.id === id ? { ...task, ...body } : task)
            setTasks(newTasks)
        } catch (e) {
            console.log('АШИПКА')
        }
    }
    return {
        tasks,
        addTask,
        deleteTask,
        updateTask
    }



}

export default useTasks

