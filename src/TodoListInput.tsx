import React, {FC} from "react";
import {TaskType} from "./TodoList";

type TodoListInputProps  = {
    tasks: Array<TaskType>
}

const TodoListInput: FC<TodoListInputProps> = (
    {
        tasks,
    }
) => {

    const tasksJSXElements = tasks.map(t =>{
        return (
            <li>
            <input type="checkbox" checked={t.isDone}/>
            <span>{t.title}</span>
        </li>
        )
    })

    return (
        <div>
            <ul>
                {tasksJSXElements}
            </ul>
        </div>
    );
};

export default TodoListInput;