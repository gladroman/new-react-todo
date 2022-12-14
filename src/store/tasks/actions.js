import axios from "axios"
import { useSelector } from "react-redux"


axios.defaults.baseURL = 'http://localhost:3334/'


const TASKS_LOADED = 'tasks/loaded'
const TODAY_TASKS_LOADED = 'todayTasks/loaded'
const ADD_TASK = 'task/added'
const DELETE_TASK = 'task/deleted'
const UPDATE_TASK = 'task/updated'

const selectTasks = state => state.tasks
const selectListTasks = id => state => state.tasks[id]
const selectTodayTasks = state => state.tasks.today

const loadTasks = listId => dispatch => {
    axios.get(`lists/${listId}/tasks?all=true`)
        .then(res => res.data)
        .then(tasks => dispatch({
            type: TASKS_LOADED,
            listId,
            tasks
        }))
}


const loadTodayTasks = () => dispatch => {
    axios.get(`collection/today`)
        .then(res => res.data)
        .then(tasks => dispatch({
            type: TODAY_TASKS_LOADED,
            tasks
        }))
}

const createTask = newTask => dispatch => {
    axios.post(`lists/${newTask.list_id}/tasks`, newTask)
        .then(res => res.data)
        .then(task => ({type: ADD_TASK, task}))
        .then(dispatch)
}

const deleteTask = task => dispatch => {
    axios.delete(`lists/${task.list_id}/tasks/${task.id}`)
        .then(res => dispatch({
            type: DELETE_TASK,
            task
        }))

}

const updateTask = (task, body) => dispatch => {
    axios.patch(`lists/${task.list_id}/tasks/${task.id}`, body)
        .then(res => res.data)
        .then(task => dispatch({
            type: UPDATE_TASK,
            task
        }))

}

export {
    TASKS_LOADED,
    TODAY_TASKS_LOADED,
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    loadTasks,
    loadTodayTasks,
    createTask,
    deleteTask,
    updateTask,
    selectTasks,
    selectListTasks,
    selectTodayTasks
}