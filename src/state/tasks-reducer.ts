
import {
    AddTodolistActionType,
    RemoveTodolistActionType,
} from "./todolists-reducer";
import {v1} from "uuid";
import {TaskStateType} from "../AppWithRedux";

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

const initialState:TaskStateType = {}
    /*[todolistId1]: [
        {id: v1(), title: "Mahabharata", isDone: true},
        {id: v1(), title: "Sovereign", isDone: true},
        {id: v1(), title: "Dialogs", isDone: false},
        {id: v1(), title: "Faust", isDone: false},
        {id: v1(), title: "Generation P", isDone: false}
    ],*/
    /*[todolistId2]: [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: false},
        {id: v1(), title: "GrahpQl", isDone: false}
    ]*/


export const tasksReducer = (state: TaskStateType = initialState, action: ActionsType): TaskStateType => {
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
            return {...state, [action.todolistId]: []}
        case "REMOVE-TODOLIST":
            const stateCopy = {...state}
            delete stateCopy[action.todolistId]
            return stateCopy
        default:
            return state
    }
}

export const removeTaskAC = (todolistId: string, taskId: string ) => {
    return {
        type: "REMOVE_TASK",
        todolistId,
        taskId,
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
