import {
    todolistsReducer,
    removeTodolistAC,
    addTodolistAC,
    changeTodolistTitleAC,
    changeTodolistFilterAC,
} from "./todolists-reducer";
import {v1} from "uuid";
import {FilterValuesType, TodolistType} from "../App";

test("correct todolist chould be removed", () => {
    let todolistId1 = v1()
    let todolistId2 = v1()
    let todolistId3 = v1()
    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to by", filter: "active"},
        {id: todolistId3, title: "What to to", filter: "completed"}
    ]

    const endState = todolistsReducer(startState, removeTodolistAC(todolistId1))

    expect(endState.length).toBe(2)
    expect(endState[0].id).toBe(todolistId2)
    expect(endState[0].filter).toBe("active")
    expect(endState[1].filter).toBe("completed")
    expect(endState[1].title).toBe("What to to")
})

test("correct todolist chould be added", () => {
    let todolistId1 = v1()
    let todolistId2 = v1()
    let todolistId3 = v1()

    let newTodolistTitle: string = "New Todolist"

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to by", filter: "active"},
        {id: todolistId3, title: "What to to", filter: "completed"}
    ]

    const endState = todolistsReducer(startState, addTodolistAC(newTodolistTitle))

    expect(endState.length).toBe(4)
    expect(endState[0].title).toBe(newTodolistTitle)
    expect(endState[0].filter).toBe("active")
})

test("correct todolist chould change its name", () => {
    let todolistId1 = v1()
    let todolistId2 = v1()
    let todolistId3 = v1()

    let newTodolistTitle: string = "New Todolist"

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to by", filter: "active"},
        {id: todolistId3, title: "What to to", filter: "completed"}
    ]

    const endState = todolistsReducer(startState, changeTodolistTitleAC(todolistId2, newTodolistTitle))

    expect(endState.length).toBe(3)

    expect(endState[0].title).toBe("What to learn")
    expect(endState[1].title).toBe(newTodolistTitle)

})

test("correct todolist chould be changed", () => {
    let todolistId1 = v1()
    let todolistId2 = v1()
    let todolistId3 = v1()

    let newFilter: FilterValuesType = "completed"

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to by", filter: "active"},
        {id: todolistId3, title: "What to to", filter: "completed"}
    ]

    const endState = todolistsReducer(startState, changeTodolistFilterAC(todolistId1, newFilter))

    expect(endState.length).toBe(3)
    expect(endState[0].title).toBe("What to learn")
    expect(endState[2].filter).toBe(newFilter)
    expect(endState[0].filter).toBe(newFilter)
    expect(endState[1].title).toBe("What to by")
})