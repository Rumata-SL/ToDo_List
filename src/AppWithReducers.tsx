import React, {useReducer} from "react";
import "./App.css";
import {TodoList, TaskType} from "./component/TodoList";
import {v1} from "uuid";
import {AddItemForm} from "./component/AddItemForm";
import {
    addTodolistAC,
    changeFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todolistsReducer
} from "./state/todolists-reducer";
import {
    addTaskAC,
    changeStatusAC, changeTaskTitleAC,
    removeTaskAC,
    tasksReducer
} from "./state/tasks-reducer";


export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type TaskObjType = {
    [key: string]: Array<TaskType>
}

function AppWithReducers() {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todoLists, dispatchToTodolistsReducer] = useReducer(todolistsReducer, [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to read", filter: "all"}
    ])

    let [tasksObj, dispatchToTasksReducer] = useReducer(tasksReducer, {
        [todolistId1]: [
            {id: v1(), title: "Mahabharata", isDone: true},
            {id: v1(), title: "Sovereign", isDone: true},
            {id: v1(), title: "Dialogs", isDone: false},
            {id: v1(), title: "Faust", isDone: false},
            {id: v1(), title: "Generation P", isDone: false}
        ],
        [todolistId2]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "Redux", isDone: false},
            {id: v1(), title: "GrahpQl", isDone: false}
        ]
    })

    const removeTask = (todolistId: string, taskId: string) => {
        dispatchToTasksReducer(removeTaskAC(todolistId, taskId))
    }

    const addTask = (todolistId: string, newTitle: string) => {
        dispatchToTasksReducer(addTaskAC(todolistId, newTitle)
        )
    }

    const changeStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        dispatchToTasksReducer(changeStatusAC(todolistId, taskId, isDone))
    }

    const changeTaskTitle = (todolistId: string, taskId: string, title: string) => {
        dispatchToTasksReducer(changeTaskTitleAC(todolistId, taskId, title))
    }


    const changeFilter = (todolistId: string, filter: FilterValuesType) => {
        dispatchToTodolistsReducer(changeFilterAC(todolistId, filter))
    }

    const removeTodolist = (todolistId: string) => {
        dispatchToTodolistsReducer(removeTodolistAC(todolistId))
        dispatchToTasksReducer(removeTodolistAC(todolistId))
    }

    const changeTodoListTitle = (todolistID: string, title: string) => {
        dispatchToTodolistsReducer(changeTodolistTitleAC(todolistID, title))
    }

    const addTodoList = (title: string) => {
        dispatchToTodolistsReducer(addTodolistAC(title))
        dispatchToTasksReducer(addTodolistAC(title))
    }

    return (
        <div className="App">
            <div className={"header"}>
                <h1>Create ToDoList</h1>
                <AddItemForm addItem={addTodoList}/>
            </div>
            <div className={"main"}>

                {
                    todoLists.map((tl) => {
                        let tasksForTodoList = tasksObj[tl.id];
                        switch (tl.filter) {
                            case "active":
                                tasksForTodoList = tasksForTodoList.filter(t => !t.isDone);
                                break
                            case "completed":
                                tasksForTodoList = tasksForTodoList.filter(t => t.isDone);
                                break
                        }
                        return <TodoList
                            key={tl.id}
                            id={tl.id}
                            title={tl.title}
                            tasks={tasksForTodoList}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeStatus={changeStatus}
                            filter={tl.filter}
                            removeTodolist={removeTodolist}
                            changeTaskTitle={changeTaskTitle}
                            changeTodoListTitle={changeTodoListTitle}

                        />
                    })
                }
            </div>
        </div>
    );
}

export default AppWithReducers;
