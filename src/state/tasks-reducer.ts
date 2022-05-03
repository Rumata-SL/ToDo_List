import {TaskObjType,} from "../App";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";
import {v1} from "uuid";

type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
type AddTaskActionType = ReturnType<typeof addTaskAC>
type ChangeStatusTaskActionType = ReturnType<typeof changeStatusAC>
type ChangeTaskTitleActionType = ReturnType<typeof changeTaskTitleAC>

type ActionsType =
    RemoveTaskActionType
    | AddTaskActionType
    | ChangeStatusTaskActionType
    | ChangeTaskTitleActionType
    | AddTodolistActionType
    | RemoveTodolistActionType

export const tasksReducer = (state: TaskObjType, action: ActionsType): TaskObjType => {
    switch (action.type) {
        case "REMOVE_TASK":
            return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)}
        case "ADD_TASK":
            return {
                ...state,
                [action.todolistId]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistId]]
            }
        case "CHANGE_STATUS_ISDONE":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ? {
                    ...t,
                    isDone: action.isDone
                } : t)
            }
        case "CHANGE_TITLE":
            return {
                ...state, [action.todolistId]: state[action.todolistId].map(el => el.id === action.taskId
                    ? {...el, title: action.title}
                    : el)
            }
        case "ADD-TODOLIST":
            /*const stateCopy = {...state}
            stateCopy[action.todolistId] = []
            return stateCopy*/
            return {...state, [action.todolistId]: []}
        case "REMOVE-TODOLIST":
            const stateCopy = {...state}
            delete stateCopy[action.todolistId]
            return stateCopy
        default:
            throw new Error(" I don't understand this action type")
    }
}

export const removeTaskAC = (todolistId: string, taskId: string ) => {
    return {
        type: "REMOVE_TASK",
        todolistId: todolistId,
        taskId: taskId,
    } as const
}

export const addTaskAC = (todolistId: string, newTitle: string) => {
    return {
        type: "ADD_TASK",
        todolistId,
        title: newTitle
    } as const
}

export const changeStatusAC = (todolistId: string, taskId: string, isDone: boolean) => {
    return {
        type: "CHANGE_STATUS_ISDONE",
        todolistId,
        taskId,
        isDone
    } as const
}

export const changeTaskTitleAC = (todolistId: string, taskId: string, title: string) => {
    return {
        type: "CHANGE_TITLE",
        todolistId,
        taskId,
        title
    } as const
}
