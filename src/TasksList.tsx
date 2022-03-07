import React, {FC} from "react";
import {TaskType} from "./TodoList";

type TodoListInputProps  = {
    tasks: Array<TaskType>
    removeTask: (id: number) => void
}

const TasksList: FC<TodoListInputProps> = (
    {
        tasks,
        removeTask
    }
) => {

    const tasksJSXElements = tasks.map(t =>{
        return (
            <li key={t.id}>
            <input type="checkbox" checked={t.isDone}/>
            <span>{t.title}</span>
                <button onClick={()=>removeTask(t.id)}>X</button>
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

export default TasksList;