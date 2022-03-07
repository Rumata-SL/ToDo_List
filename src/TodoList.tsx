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
                    <Button title={"+"} callback={()=>{}}/>
                </div>

                < TasksList tasks={props.tasks} removeTask={props.removeTask}/>

                <div>
                    <Button title={"All"} callback={()=>{}}/>
                    <Button title={"Active"} callback={()=>{}}/>
                    <Button title={"Completed"} callback={()=>{}}/>
                </div>
            </div>
        </div>
    )
}

export default TodoList;