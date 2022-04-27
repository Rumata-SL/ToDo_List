import {addTascAC, changeTaskStatusAC, changeTaskTitleAC, removeTascAC, tasksReducer} from "./tasks-reducer";
import {TaskObjType} from "../App";

test('correct task should be deleted from correct array', ()=>{
    const startState:TaskObjType ={
        "todolistId1": [
            {id: "1", title: "Mahabharata", isDone: true},
            {id: "2", title: "Sovereign", isDone: true},
            {id: "3", title: "Dialogs", isDone: false},
        ],
    "todolistId2": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false},
        ]
    }

    const endState = tasksReducer(startState, removeTascAC("2","todolistId2"))
    expect(endState["todolistId1"].length).toBe(3)
    expect(endState["todolistId2"].length).toBe(2)
    expect(endState["todolistId2"].every(el=>el.id != "2")).toBeTruthy();
})

test('correct task should be added from correct array', ()=>{
    const startState:TaskObjType ={
        "todolistId1": [
            {id: "1", title: "Mahabharata", isDone: true},
            {id: "2", title: "Sovereign", isDone: true},
            {id: "3", title: "Dialogs", isDone: false},
        ],
        "todolistId2": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false},
        ]
    }

    const endState = tasksReducer(startState, addTascAC("todolistId2","SCSS"))
    expect(endState["todolistId1"].length).toBe(3)
    expect(endState["todolistId2"].length).toBe(4)
    expect(endState["todolistId2"][0].title).toBe("SCSS")
})

test('status of changed', ()=>{
    const startState:TaskObjType ={
        "todolistId1": [
            {id: "1", title: "Mahabharata", isDone: true},
            {id: "2", title: "Sovereign", isDone: true},
            {id: "3", title: "Dialogs", isDone: false},
        ],
        "todolistId2": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false},
        ]
    }

    const endState = tasksReducer(startState, changeTaskStatusAC("todolistId2","2", false))

    expect(endState["todolistId2"][1].isDone).toBeFalsy()
    expect(endState["todolistId2"][1].title).toBe("JS")
    expect(endState["todolistId1"][1].isDone).toBeTruthy()

})

test('status of changed', ()=>{
    const startState:TaskObjType ={
        "todolistId1": [
            {id: "1", title: "Mahabharata", isDone: true},
            {id: "2", title: "Sovereign", isDone: true},
            {id: "3", title: "Dialogs", isDone: false},
        ],
        "todolistId2": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false},
        ]
    }

    const endState = tasksReducer(startState, changeTaskTitleAC("todolistId2","2", "JavaScript"))

    expect(endState["todolistId2"][1].title).toBe("JavaScript")
    expect(endState["todolistId1"][1].title).toBe("Sovereign")

})