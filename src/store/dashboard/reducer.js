import { combineReducers } from 'redux'
import { DASHBOARD_LOADED } from './actions'


function openedTasksReducer(state={}, action) {
    switch (action.type) {
        case DASHBOARD_LOADED:
            return action.payload.lists.reduce((obj, list) => ({ ...obj, [list.id]: list.undone}), {}) 
    
        default:
            return state
    }

        
}

export default combineReducers({
    today: (today = 0, {type, payload}) => type === DASHBOARD_LOADED ? payload.today : today,
    lists: (lists = [], {type, payload}) => type === DASHBOARD_LOADED ? [...payload.lists.map(list=>({id:list.id,name:list.name}))] : lists,
    openedTasks: openedTasksReducer
})

