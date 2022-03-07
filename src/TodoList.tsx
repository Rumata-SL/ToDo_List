import React from "react";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TasksList from "./TasksList";


export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (id: number) => void

}



const TodoList = (props: TodoListPropsType) => {


    return (
        <div>
            <div>
                <TodoListHeader title={props.title}/>
                <div>
                    <input/>
                    <button>+</button>
                </div>

                < TasksList tasks={props.tasks} removeTask={props.removeTask}/>

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