import React from "react";
import {TodoListHeader} from "./TodoListHeader";
import {Button} from "./Button";
import {TasksList} from "./TasksList";
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";


export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    filter: FilterValuesType
    id: string
    removeTodolist: (todolistId: string) => void

}

export const TodoList = (props: TodoListPropsType) => {

    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }

    return (
        <div className={"wrapper"}>
            <div>
                <TodoListHeader title={props.title} removeTodolist={removeTodolist}/>

                <AddItemForm id={props.id} addTask={props.addTask}/>

                < TasksList
                    tasks={props.tasks}
                    removeTask={props.removeTask}
                    changeStatus={props.changeStatus}
                    todolistId={props.id}
                />

                <div>
                    <Button buttonClass={props.filter === "all" ? "btnClass" : ""}
                            title={"All"}
                            callback={() => {
                                props.changeFilter("all", props.id)
                            }}
                    />
                    <Button buttonClass={props.filter === "active" ? "btnClass" : ""}
                            title={"Active"}
                            callback={() => {
                                props.changeFilter("active", props.id)
                            }}
                    />
                    <Button buttonClass={props.filter === "completed" ? "btnClass" : ""}
                            title={"Completed"}
                            callback={() => {
                                props.changeFilter("completed", props.id)
                            }}
                    />
                </div>
            </div>
        </div>
    )
}
