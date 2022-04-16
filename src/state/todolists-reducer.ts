import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";


type ActionsType =
    ReturnType<typeof RemoveTodolistAC>
    | ReturnType<typeof AddTodolistlistAC>
    | ReturnType<typeof ChangeTodolistTitleAC>
    | ReturnType<typeof ChangeTodolistFilterAC>

export const todolistsReducer = (state: Array<TodolistType>, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return state.filter(el => el.id !== action.id)
        case "ADD-TODOLIST":
            return [{
                id: v1(),
                title: action.title,
                filter: "active",
            }, ...state]
        case "CHANGE-TODOLIST-TITLE":
            return state.map(el => el.id === action.id ? {...el, title: action.title} : el)
        case "CHANGE-TODOLIST-FILTER":
            return state.map(el => el.id === action.id ? {...el, filter: action.filter} : el)

        default:
            throw new Error(" I don't understand this action type")
    }
}

export const RemoveTodolistAC = (todolistId: string) => {
    return {
        type: "REMOVE-TODOLIST",
        id: todolistId
    } as const
}

export const AddTodolistlistAC = (newTitle: string) => {
    return {
        type: "ADD-TODOLIST",
        title: newTitle
    } as const
}

export const ChangeTodolistTitleAC = (todolistId: string, newTitle: string) => {
    return {
        type: "CHANGE-TODOLIST-TITLE",
        id: todolistId,
        title: newTitle
    } as const
}

export const ChangeTodolistFilterAC = (todolistId: string, newFilter: FilterValuesType) => {
    return {
        type: "CHANGE-TODOLIST-FILTER",
        id: todolistId,
        filter: newFilter
    } as const
}