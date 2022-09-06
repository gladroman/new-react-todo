import axios from "axios";
import { dashboardAction } from '../store/index'

axios.defaults.baseURL = 'http://localhost:3334/'

function getDashboard() {
    return axios.get(`dashboard`).then(res => res.data)
}

function getTasks(endpoint) {
    return axios.get(endpoint).then(res => res.data)
}

function createTask(task) {
    return axios.post(`lists/${task.list_id}/tasks`, task).then(res => res.data)
}

function patchTask(task, body) {
    return axios.patch(`lists/${task.list_id}/tasks/${task.id}`, body).then(res => res.data)
}
function deleteTaskFromDB(task) {
    return axios.delete(`lists/${task.list_id}/tasks/${task.id}`).then(res => res.data)
}
function getTodayTasks() {
    return axios.get('collection/today').then(res => res.data).catch((e) => console.log(e))
}

export const fetchDashboard = () => {
    return function (dispatch) {
        axios.get(`dashboard`).then(res => res.data).then(dashboard => dispatch(dashboardAction(dashboard)))
    }
}
export { getDashboard, getTasks, createTask, patchTask, deleteTaskFromDB, getTodayTasks }