import axios from "axios"
import { useSelector } from "react-redux"


axios.defaults.baseURL = 'http://localhost:3334/'
const DASHBOARD_LOADED = "dashboard/loaded"


const selectList = id=>{
    return state=>{

    return state.dashboard.lists.find(list=>list.id === id)
}
}


const dashboardAction = (payload)=>({type: DASHBOARD_LOADED, payload})

const fetchDashboard = function (dispatch) {
    axios.get(`dashboard`).then(res => res.data).then(dashboard => dispatch(dashboardAction(dashboard)))

}

export { DASHBOARD_LOADED , fetchDashboard , selectList}