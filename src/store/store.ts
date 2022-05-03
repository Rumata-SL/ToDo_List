import {combineReducers, createStore} from "redux";
import {tasksReducer} from "../state/tasks-reducer";
import {todolistsReducer} from "../state/todolists-reducer";

const rootReducer = combineReducers({
    todolist:todolistsReducer,
    tasks: tasksReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)



//@ts-ignore
window.store = store
