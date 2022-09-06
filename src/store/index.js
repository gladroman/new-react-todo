import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk"

const DASHBOARD_LOAD = "DASHBOARD_LOAD"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = (state = {dashboard:[]}, action)=>{
    switch (action.type) {
        case DASHBOARD_LOAD:
            return {...state, dashboard: [...state.dashboard, ...action.payload]}
            
        default:
            return state
    }
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk))) 


const dashboardAction = (payload)=>({type: DASHBOARD_LOAD, payload})
export {store, dashboardAction}