import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, patchTask, deleteTaskFromDB } from '../axios/axios';
import { loadTasks, loadTodayTasks, createTask, deleteTask, updateTask, selectListTasks, selectTodayTasks } from '../store/tasks/actions';


function useTasks(id) {
    const dispatch = useDispatch()
    useEffect(() => {
        id ? dispatch(loadTasks(id)) : dispatch(loadTodayTasks())
    }, [id])

    const tasksSelector = id ? selectListTasks(id) : selectTodayTasks()
    const tasks = useSelector(tasksSelector)

    const onAddTask = (newTask) => {
        dispatch(createTask(newTask))
    }

    const onDeleteTask = task => {
        dispatch(deleteTask(task))
    }

    const onUpdateTask = (task, body) => {
        dispatch(updateTask(task, body))
    }
    return {
        tasks,
        onAddTask,
        onDeleteTask,
        onUpdateTask
    }



}

export default useTasks

