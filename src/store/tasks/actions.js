import axios from "axios"
import { useSelector } from "react-redux"


axios.defaults.baseURL = 'http://localhost:3334/'


const TASKS_LOADED = 'tasks/loaded'
const TODAY_TASKS_LOADED = 'todayTasks/loaded'
const ADD_TASK = 'task/added'
const DELETE_TASK = 'task/deleted'


const loadTasks = listId => dispatch => {
    axios.get(`lists/${listId}/tasks`)
        .then(res => res.data)
        .then(tasks => dispatch({
            type: TASKS_LOADED,
            listId,
            tasks
        }))
}


const loadTodayTasks = ()=>dispatch=>{
    axios.get(`collection/today`)
    .then(res => res.data)
    .then(tasks => dispatch({
        type: TODAY_TASKS_LOADED,
        tasks
    }))
}

const createTask = newTask=>dispatch=>{
    axios.post(`lists/${newTask.list_id}/tasks`,newTask)
        .then(res=>res.data)
        .then(task=>dispatch({
            type:ADD_TASK,
            task
        }))
}

const deleteTask =task=>dispatch=>{
    axios.delete(`lists/${task.list_id}/tasks/${task.id}`)
        .then(res=>dispatch({
            type:DELETE_TASK,
            task
        }))

}

export { TASKS_LOADED,TODAY_TASKS_LOADED, ADD_TASK, DELETE_TASK , loadTasks, loadTodayTasks, createTask, deleteTask }