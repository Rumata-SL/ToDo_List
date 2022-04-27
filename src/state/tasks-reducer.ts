import {TaskObjType,} from "../App";


type ActionsType =
    ReturnType<typeof removeTaskAC>
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof changeTaskStatusAC>
    | ReturnType<typeof changeTaskTitleAC>

export const tasksReducer = (state: TaskObjType, action: ActionsType): TaskObjType => {
    switch (action.type) {
        case "REMOVE_TASK":
            return {...state, [action.todolistId]: state[action.todolistId].filter(t=> t.id !== action.taskId)}
        case "ADD_TASK":
            return {...state, [action.todolistId]: [{id: "4",title:action.title, isDone:true}, ...state[action.todolistId]]}
        case "CHANGE_STATUS_ISDONE":
            return {...state, [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ? {...t, isDone: action.isDone} : t)}
        case "CHANGE_STATUS_TITLE":
            return {
                ...state, [action.todolistId]: state[action.todolistId].map(el => el.id === action.taskId
                    ? {...el, title: action.title}
                    : el)
            }
        default:
            throw new Error(" I don't understand this action type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string,) => {
    return {
        type: "REMOVE_TASK",
        taskId: taskId,
        todolistId: todolistId,
    } as const
}

export const addTaskAC = (todolistId:string, newTitle: string) => {
    return {
        type: "ADD_TASK",
        todolistId,
        title: newTitle
    } as const
}

export const changeTaskStatusAC = (todolistId:string, taskId: string, isDone:boolean) => {
    return {
        type: "CHANGE_STATUS_ISDONE",
        todolistId,
        taskId,
        isDone
    } as const
}

export const changeTaskTitleAC = (todolistId:string, taskId: string, title:string) => {
    return {
        type: "CHANGE_STATUS_TITLE",
        todolistId,
        taskId,
        title
    } as const
}
