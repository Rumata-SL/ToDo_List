import React, {FC} from "react";
import {TaskType} from "./TodoList";
import Button from "./Button";

type TodoListInputProps = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
}

const TasksList: FC<TodoListInputProps> = (
    {
        tasks,
        removeTask
    }
) => {

    const tasksJSXElements = tasks.map(t => {
        const onClickRemoveTask = () => removeTask(t.id)
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <Button title={"X"} callback={onClickRemoveTask}/>

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