import React from "react";
import "./App.css";
import {TodoList, TaskType} from "./component/TodoList";
import {AddItemForm} from "./component/AddItemForm";
import {
    addTodolistAC,
    changeFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC
} from "./reducers/todolists-reducer";
import {
    addTaskAC,
    changeStatusAC, changeTaskTitleAC,
    removeTaskAC,
} from "./reducers/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./store/store";


export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type TaskStateType = {
    [key: string]: Array<TaskType>
}

function AppWithRedux() {

    const dispatch = useDispatch()
    const todoLists = useSelector<AppRootState, Array<TodolistType>>(state=>state.todolist);
    const tasks = useSelector<AppRootState, TaskStateType>(state=>state.tasks);

    const removeTask = (todolistId: string, taskId: string) => {
        dispatch(removeTaskAC(todolistId, taskId))
    }

    const addTask = (todolistId: string, newTitle: string) => {
        dispatch(addTaskAC(todolistId, newTitle)
        )
    }

    const changeStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        dispatch(changeStatusAC(todolistId, taskId, isDone))
    }

    const changeTaskTitle = (todolistId: string, taskId: string, title: string) => {
        dispatch(changeTaskTitleAC(todolistId, taskId, title))
    }


    const changeFilter = (todolistId: string, filter: FilterValuesType) => {
        dispatch(changeFilterAC(todolistId, filter))
    }

    const removeTodolist = (todolistId: string) => {
        dispatch(removeTodolistAC(todolistId))
    }

    const changeTodoListTitle = (todolistID: string, title: string) => {
        dispatch(changeTodolistTitleAC(todolistID, title))
    }

    const addTodoList = (title: string) => {
        dispatch(addTodolistAC(title))
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
                        let tasksForTodoList = tasks[tl.id];
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

export default AppWithRedux;