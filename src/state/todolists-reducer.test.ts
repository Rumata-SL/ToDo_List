import {todolistsReducer} from "./todolists-reducer";
import {v1} from "uuid";
import {TodolistType} from "../App";

test("correct todolist chould be removed", ()=>{
    let todolistId1 = v1()
    let todolistId2 = v1()
    let todolistId3 = v1()
    const startState:Array<TodolistType>=[
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to by", filter: "active"},
        {id: todolistId3, title: "What to to", filter: "completed"}
    ]

    const endState = todolistsReducer(startState, {type: "REMOVE-TODOLIST", id: todolistId1})
    expect(endState.length).toBe(2)
    expect(endState[0].id).toBe(todolistId2)
    expect(endState[0].filter).toBe("active")
    expect(endState[1].filter).toBe("completed")
    expect(endState[1].title).toBe("What to to")
})

test("correct todolist chould be added",()=>{
    let todolistId1 = v1()
    let todolistId2 = v1()
    let todolistId3 = v1()

    let newTodolistTitle:string = "New Todolist"

    const startState:Array<TodolistType>=[
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to by", filter: "active"},
        {id: todolistId3, title: "What to to", filter: "completed"}
    ]

    const endState = todolistsReducer(startState, {type: "ADD-TODOLIST", title: newTodolistTitle})
    expect(endState.length).toBe(4)
    expect(endState[0].title).toBe(newTodolistTitle)
    expect(endState[0].filter).toBe("active")
})