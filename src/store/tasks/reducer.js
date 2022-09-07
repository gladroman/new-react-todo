import { combineReducers } from 'redux'
import { TASKS_LOADED, TODAY_TASKS_LOADED, ADD_TASK, DELETE_TASK } from './actions'


export default function tasksReducer(state = {}, action) {
    switch (action.type) {
        case TASKS_LOADED:
            return { ...state, [action.listId]: action.tasks }
        case TODAY_TASKS_LOADED:
            return { ...state, today: action.tasks }
        case ADD_TASK:{
            const list_id = action.task.list_id
            console.log("STATE", state)
            return { ...state, [list_id]: state[list_id] ? [...state[list_id], action.task] : [action.task] }
        }
        case DELETE_TASK:{
            const { list_id, id } = action.task
            return { ...state, [list_id]: [...state[list_id].filter(task => task.id !== id)] }
        }
            

        default:
            return state
    }


}


