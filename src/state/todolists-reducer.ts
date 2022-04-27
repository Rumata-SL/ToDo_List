import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";




type ActionsType =
    ReturnType<typeof removeTodolistAC>
    | ReturnType<typeof addTodolistlistAC>
    | ReturnType<typeof changeTodolistTitleAC>
    | ReturnType<typeof changeTodolistFilterAC>

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

export const removeTodolistAC = (todolistId: string) => {
    return {
        type: "REMOVE-TODOLIST",
        id: todolistId
    } as const
}

export const addTodolistlistAC = (newTitle: string) => {
    return {
        type: "ADD-TODOLIST",
        title: newTitle
    } as const
}

export const changeTodolistTitleAC = (todolistId: string, newTitle: string) => {
    return {
        type: "CHANGE-TODOLIST-TITLE",
        id: todolistId,
        title: newTitle
    } as const
}

export const changeTodolistFilterAC = (todolistId: string, newFilter: FilterValuesType) => {
    return {
        type: "CHANGE-TODOLIST-FILTER",
        id: todolistId,
        filter: newFilter
    } as const
}