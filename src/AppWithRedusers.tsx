import React, {useReducer, useState} from "react";
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
        // setTask({...tasksObj, [todolistId]: tasksObj[todolistId].filter(t => t.id !== id)})
    }

    const addTask = (todolistId: string, newTitle: string) => {
        dispatchToTasksReducer(addTaskAC(todolistId, newTitle)
        )
        // let newTask: TaskType = {
        //     id: v1(),
        //     title,
        //     isDone: false
        // }
        // setTask({...tasksObj, [todolistId]: [newTask, ...tasksObj[todolistId]]})
    }

    const changeStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        dispatchToTasksReducer(changeStatusAC(todolistId, taskId, isDone))
        // setTask({...tasksObj, [todolistId]: tasksObj[todolistId].map(t => t.id === taskId ? {...t, isDone} : t)});
    }

    const changeTaskTitle = (todolistId: string, taskId: string, title: string) => {
        dispatchToTasksReducer(changeTaskTitleAC(todolistId, taskId, title))
        /*setTask({
            ...tasksObj, [todolistId]: tasksObj[todolistId].map(el => el.id === taskId
                ? {...el, title: title}
                : el)
        })*/
    }


    const changeFilter = (todolistId: string, filter: FilterValuesType) => {
        dispatchToTodolistsReducer(changeFilterAC(todolistId, filter))

            /*setTodoLists(todoLists.map(filtered => filtered.id === todolistId ? {
                ...filtered,
                filter: value
            } : filtered))*/
    }

    const removeTodolist = (todolistId: string) => {
        const action = removeTodolistAC(todolistId)
        dispatchToTodolistsReducer(action)
        dispatchToTasksReducer(action)

        /*setTodoLists(todoLists.filter(tl => tl.id !== todolistId))
        delete tasksObj[todolistId];
        setTask({...tasksObj});*/
    }

    const changeTodoListTitle = (todolistID: string, title: string) => {
        dispatchToTodolistsReducer(changeTodolistTitleAC(todolistID, title))
        /*setTodoLists(todoLists.map(el => el.id === todolistID ? {
            ...el,
            title: newTitle
        } : el))*/
    }

    const addTodoList = (title: string) => {
        const action = addTodolistAC(title)
        dispatchToTodolistsReducer(action)
        dispatchToTasksReducer(action)

        /*let todoList: TodolistType = {
            id: v1(),
            title,
            filter: "all",
        }
        setTodoLists([todoList, ...todoLists])
        setTask({
            ...tasksObj,
            [todoList.id]: []
        })*/
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
