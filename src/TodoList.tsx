import React from "react";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TodoListInput from "./TodoListInput";

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

export const tasks_1: Array<TaskType> = [
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: false},
]
const TodoList = (props: TodoListPropsType) => {


    return (
        <div>
            <div>
                <TodoListHeader title={props.title}/>
                <div>
                    <input/>
                    <button>+</button>
                </div>

                < TodoListInput tasks={props.tasks}/>

                <div>
                    <Button title={"All"}/>
                    <Button title={"Active"}/>
                    <Button title={"Completed"}/>
                </div>
            </div>
        </div>
    )
}

export default TodoList;