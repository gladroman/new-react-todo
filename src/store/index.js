import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk"
import dashboardReducer from './dashboard/reducer'
import tasksReducer from "./tasks/reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer
})



const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store


