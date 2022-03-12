import React from "react";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TasksList from "./TasksList";
import {FilterValueType} from "./App";


export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    changeFilter: (value: FilterValueType) => void

}

const TodoList = (props: TodoListPropsType) => {

    return (
        <div>
            <div>
                <TodoListHeader title={props.title}/>
                <div>
                    <input/>
                    <Button title={"added"} callback={() => {
                    }}/>
                </div>

                < TasksList tasks={props.tasks} removeTask={props.removeTask}/>

                <div>
                    <Button title={"All"} callback={()=>{props.changeFilter("all")}} />
                    <Button title={"Active"} callback={()=>{props.changeFilter("active")}}/>
                    <Button title={"Completed"} callback={()=>{props.changeFilter("completed")}}/>
                </div>
            </div>
        </div>
    )
}

export default TodoList;