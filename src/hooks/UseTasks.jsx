import React from 'react'
import { useContext } from 'react';
import { useState, useEffect } from 'react'
import { getTasks, createTask, patchTask, deleteTaskFromDB } from '../axios/axios';
import TasksProvider from '../context/TasksProvider';

function useTasks(endpoint) {
    const {tasks,setTasks} = useContext(TasksProvider)

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

    const updateTask = async (modTask) => {
        try {
            await patchTask(modTask, { done: !modTask.done })
            const newTasks = tasks.map((task) => task.id === modTask.id ? { ...task, done: !task.done } : task)
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

