import React, {ChangeEvent, FC} from "react";
import {TaskType} from "./TodoList";
import Button from "./Button";

type TodoListInputProps = {
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    changeStatus: (taskId: string, isDone: boolean, todolistId: string) => void
}

const TasksList: FC<TodoListInputProps> = (
    {
        tasks,
        removeTask,
        changeStatus,
        ...props
    }
) => {
    const tasksJSXElements = tasks.map(t => {
        const onClickRemoveTask = () => removeTask(t.id,)
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => changeStatus(t.id, e.currentTarget.checked)
        return (
            <li key={t.id} className={t.isDone ? "isDone" : ""}>
                <input type="checkbox" checked={t.isDone} onChange={onChangeHandler}/>
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