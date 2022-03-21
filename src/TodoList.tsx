import React, {useState} from "react";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TasksList from "./TasksList";
import {FilterValuesType} from "./App";
import Input from "./Input";


export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatus: (taskId: string, isDone: boolean) => void

}

const TodoList = (props: TodoListPropsType) => {

    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const addTask = () => {
        const trimAddTitle = title.trim()
        if (trimAddTitle) {
            props.addTask(trimAddTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }

    return (
        <div>
            <div>
                <TodoListHeader title={props.title}/>
                <div>
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
                </div>

                < TasksList
                    tasks={props.tasks}
                    removeTask={props.removeTask}
                    changeStatus={props.changeStatus}
                />

                <div>
                    <Button
                        title={"All"}
                        callback={() => {
                            props.changeFilter("all")
                        }}
                    />
                    <Button
                        title={"Active"}
                        callback={() => {
                            props.changeFilter("active")
                        }}
                    />
                    <Button
                        title={"Completed"}
                        callback={() => {
                            props.changeFilter("completed")
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default TodoList;