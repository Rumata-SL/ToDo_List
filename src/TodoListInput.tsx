import React from 'react';
import {TaskType} from "./TodoList";

type TodoListInputProps = {
    tasks: Array<TaskType>
}

const TodoListInput = (props: TodoListInputProps) => {
    return (
        <div>
            <ul>
                <li>
                    <input type="checkbox" checked={props.tasks[0].isDone}/>
                    <span>{props.tasks[0].title}</span>
                </li>
                <li>
                    <input type="checkbox" checked={props.tasks[1].isDone}/>
                    <span>{props.tasks[1].title}</span>
                </li>
                <li>
                    <input type="checkbox" checked={props.tasks[2].isDone}/>
                    <span>{props.tasks[2].title}</span>
                </li>
            </ul>
        </div>
    );
};

export default TodoListInput;