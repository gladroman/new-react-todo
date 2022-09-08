import axios from "axios"
import { createSelector } from 'reselect'
import { selectTasks } from '../tasks/actions'


axios.defaults.baseURL = 'http://localhost:3334/'
const DASHBOARD_LOADED = "dashboard/loaded"

const selectList = id => state => state.dashboard.lists.find(list => list.id === id)
const selectOpenedTasks = state => state.dashboard.openedTasks
const selectDashboard = state => state.dashboard
const selectCounterOpenTasks = createSelector(
    selectOpenedTasks,
    selectTasks,
    (openedTasks, tasks) => {
        let undoneTasksEntires = Object.entries(tasks).map(([list_id, tasks]) => [
            list_id,
            tasks.reduce((undone, task) => undone + !task.done, 0)
        ]);
        return Object.assign({}, openedTasks, Object.fromEntries(undoneTasksEntires))
    }
)

const dashboardAction = (payload) => ({ type: DASHBOARD_LOADED, payload })

const fetchDashboard = function (dispatch) {
    axios.get(`dashboard`).then(res => res.data).then(dashboard => dispatch(dashboardAction(dashboard)))

}

export {
    DASHBOARD_LOADED,
    fetchDashboard,
    selectList,
    selectOpenedTasks,
    selectDashboard,
    selectCounterOpenTasks
}