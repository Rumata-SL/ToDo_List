import {addTaskAC, changeStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./tasks-reducer";
import {TaskObjType} from "../App";
import {addTodolistAC, removeTodolistAC} from "./todolists-reducer";


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

test('correct task should be deleted from correct array', ()=>{

     let action = removeTaskAC("todolistId2","2")
    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3)
    expect(endState["todolistId2"].length).toBe(2)
    expect(endState["todolistId2"].every(el=>el.id != "2")).toBeTruthy();
})

test('correct task should be added from correct array', ()=>{


    const endState = tasksReducer(startState, addTaskAC("todolistId2","SCSS"))
    expect(endState["todolistId1"].length).toBe(3)
    expect(endState["todolistId2"].length).toBe(4)
    expect(endState["todolistId2"][0].title).toBe("SCSS")
})

test('status of specified task should be changed', ()=>{

    const endState = tasksReducer(startState, changeStatusAC("todolistId2","2", false))

    expect(endState["todolistId2"][1].isDone).toBeFalsy()
    expect(endState["todolistId2"][1].title).toBe("JS")
    expect(endState["todolistId1"][1].isDone).toBeTruthy()

})

test('status of specified task should be title', ()=>{

    const endState = tasksReducer(startState, changeTaskTitleAC("todolistId2","2", "JavaScript"))

    expect(endState["todolistId2"][1].title).toBe("JavaScript")
    expect(endState["todolistId1"][1].title).toBe("Sovereign")

})

test('new array should be added when new todolist is added', ()=>{

    const endState = tasksReducer(startState, addTodolistAC("new todolist"))

    const keys = Object.keys(endState);
    const newKey = keys.find(k => k != "todolistId1" && k != "todolistId2");
    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);

})
test('property with todolistId should be deleted', () => {

    const action = removeTodolistAC("todolistId2");

    const endState = tasksReducer(startState, action)


    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
});
