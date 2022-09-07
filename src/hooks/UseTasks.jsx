import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTasks,  patchTask, deleteTaskFromDB } from '../axios/axios';
import { loadTasks, loadTodayTasks, createTask, deleteTask } from '../store/tasks/actions';


function useTasks(id) {
    const dispatch = useDispatch()
    useEffect(()=>{
        id ? dispatch(loadTasks(id)) : dispatch(loadTodayTasks())
    },[id])
    const tasksSelector = id ? state=>state.tasks[id] : state=>state.tasks.today             
    const tasks = useSelector(tasksSelector)

    const onAddTask = (newTask) => {
        dispatch(createTask(newTask))
    }

    const onDeleteTask = task => {
        dispatch(deleteTask(task))
    }

    // const updateTask = async (task, body) => {
    //     const {id} = task
    //     try {
    //         await patchTask(task, body)
    //         const newTasks = tasks.map((task) => task.id === id ? { ...task, ...body } : task)
    //         setTasks(newTasks)
    //     } catch (e) {
    //         console.log('АШИПКА')
    //     }
    // }
    return {
        tasks,
        onAddTask,
        onDeleteTask,
        // updateTask
    }



}

export default useTasks

