import React, {useState} from "react";
import {TodoListHeader} from "./TodoListHeader";
import {Button} from "./Button";
import {TasksList} from "./TasksList";
import {FilterValuesType} from "./App";
// import {Input} from "./Input";
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

    /*const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)*/

   /* const addTask = () => {
        const trimAddTitle = title.trim()
        if (trimAddTitle) {
            props.addTask(trimAddTitle, props.id)
        } else {
            setError(true)
        }
        setTitle("")
    }*/

    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }

    return (
        <div className={"wrapper"}>
            <div>
                <TodoListHeader title={props.title} removeTodolist={removeTodolist}/>

                <AddItemForm id={props.id}  addTask={props.addTask}/>

                {/*<div>
                    <Input
                        error={error}
                        title={title}
                        setTitle={setTitle}
                        callback={addTask}
                        setError={setError}
                    />
                    <Button
                        title={"+"}
                        callback={addTask}
                    />
                    {error && <div className={"errorMessage"}>Title to required</div>}
                </div>*/}

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
