import {TodolistType} from "../App";
import {v1} from "uuid";

type StateType = {
    age: number
    childrenCount: number
    name: string
}
type ActionType = {
    type: string
    [key: string]: any
}
export const todolistsReducer = (state:Array<TodolistType>, action: ActionType): Array<TodolistType> => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return state.filter(el => el.id !== action.id)
        case "ADD-TODOLIST":
            return [{
                id: v1(),
                title: action.title,
                filter: "active",
            },...state]

        default:
            throw new Error(" I don't understand this action type")
    }
}
