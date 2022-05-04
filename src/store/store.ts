import {combineReducers} from "redux";
import {tasksReducer} from "../reducers/tasks-reducer";
import {todolistsReducer} from "../reducers/todolists-reducer";
import {legacy_createStore as createStore} from "redux";

const rootReducer = combineReducers({
    todolist:todolistsReducer,
    tasks: tasksReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>

// export const store = configureStore(rootReducer)
export const store = createStore(rootReducer)



//@ts-ignore
window.store = store
