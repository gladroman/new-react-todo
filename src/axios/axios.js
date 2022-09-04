import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3334/'

function getDashboard() {
    return axios.get(`dashboard`).then(res => res.data)
}

function getTasks(list_id) {
    return axios.get(`lists/${list_id}/tasks`).then(res => res.data)
}

function createTask(task) {
    return axios.post(`lists/${task.list_id}/tasks`,task).then(res => res.data)
}
function patchTask(task,body){
    return axios.patch(`lists/${task.list_id}/tasks/${task.id}`, body).then(res => res.data)
}

export { getDashboard, getTasks, createTask, patchTask }