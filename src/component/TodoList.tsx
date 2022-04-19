import React from "react";
import {TodoListHeader} from "./TodoListHeader";
// import {Button} from "./Button";
import {TasksList} from "./TasksList";
import {FilterValuesType} from "../App";
import {AddItemForm} from "./AddItemForm";
import {Button} from "@mui/material";


export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (todolistId: string, id: string) => void
    changeFilter: (todolistId: string, value: FilterValuesType) => void
    addTask: (todolistId: string, title: string) => void
    changeStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    changeTaskTitle: (todolistId: string, id: string, newValue: string,) => void
    filter: FilterValuesType
    id: string
    removeTodolist: (todolistId: string) => void
    changeTodoListTitle: (todolistId: string, newTitle: string) => void

}

export const TodoList = (props: TodoListPropsType) => {

    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }
    const addItem = (title: string) => {
        props.addTask(props.id, title)
    }
    const changeTodoListTitle = (newTitle: string) => {
        props.changeTodoListTitle(props.id, newTitle)
    }


    return (
        <div className={"wrapper"}>
            <div className={"wrapperBox"}>
                <div><TodoListHeader
                    title={props.title}
                    removeTodolist={removeTodolist}
                    changeTodoListTitle={changeTodoListTitle}
                />

                    <AddItemForm addItem={addItem}/>

                    < TasksList
                        tasks={props.tasks}
                        removeTask={props.removeTask}
                        changeStatus={props.changeStatus}
                        todolistId={props.id}
                        changeTaskTitle={props.changeTaskTitle}
                    /></div>

                <div className={"buttonsBox"}>
                    <Button
                        variant={props.filter === "all" ? "contained" : "outlined"}
                        onClick={() => {
                            props.changeFilter(props.id, "all",)
                        }}
                    >All
                    </Button>
                    <Button
                        variant={props.filter === "active" ? "contained" : "outlined"}
                        onClick={() => {
                            props.changeFilter(props.id, "active")
                        }}
                        color={"primary"}>Active
                    </Button>
                    <Button
                        variant={props.filter === "completed" ? "contained" : "outlined"}
                        onClick={() => {
                            props.changeFilter(props.id, "completed")
                        }}
                        color={"secondary"}>Completed
                    </Button>

                </div>
            </div>
        </div>
    )
}
