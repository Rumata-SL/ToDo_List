import React, {ChangeEvent, FC} from "react";
import {TaskType} from "./TodoList";
import {Button} from "./Button";
import {EditableSpan} from "./EditableSpan";

type TodoListInputProps = {
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    changeStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    todolistId:string
}

export const TasksList: FC<TodoListInputProps> = (
    {
        tasks,
        removeTask,
        changeStatus,
        todolistId
    }
) => {
    const tasksJSXElements = tasks.map(t => {
        const onClickRemoveTask = () => removeTask(t.id, todolistId)
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => changeStatus(t.id, e.currentTarget.checked, todolistId)
        return (
            <li key={t.id} className={t.isDone ? "isDone" : ""}>
                <input type="checkbox" checked={t.isDone} onChange={onChangeHandler}/>
                <EditableSpan title={t.title}/>
                {/*<span>{t.title}</span>*/}
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
