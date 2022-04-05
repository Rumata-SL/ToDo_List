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
    removeTask: (todolistId: string, id: string) => void
    changeFilter: (todolistId: string, value: FilterValuesType) => void
    addTask: (todolistId: string, title: string) => void
    changeStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    changeTaskTitle: (todolistId:string, id:string, newValue:string, )=>void
    filter: FilterValuesType
    id: string
    removeTodolist: (todolistId: string) => void

}

export const TodoList = (props: TodoListPropsType) => {

    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }
    const addItem = (title: string) => {
        props.addTask(props.id, title)
    }


    return (
        <div className={"wrapper"}>
            <div>
                <TodoListHeader title={props.title} removeTodolist={removeTodolist}/>

                <AddItemForm addItem={addItem}/>

                < TasksList
                    tasks={props.tasks}
                    removeTask={props.removeTask}
                    changeStatus={props.changeStatus}
                    todolistId={props.id}
                    changeTaskTitle={props.changeTaskTitle}
                />

                <div>
                    <Button buttonClass={props.filter === "all" ? "btnClass" : ""}
                            title={"All"}
                            callback={() => {
                                props.changeFilter(props.id, "all", )
                            }}
                    />
                    <Button buttonClass={props.filter === "active" ? "btnClass" : ""}
                            title={"Active"}
                            callback={() => {
                                props.changeFilter(props.id, "active")
                            }}
                    />
                    <Button buttonClass={props.filter === "completed" ? "btnClass" : ""}
                            title={"Completed"}
                            callback={() => {
                                props.changeFilter(props.id, "completed")
                            }}
                    />
                </div>
            </div>
        </div>
    )
}
