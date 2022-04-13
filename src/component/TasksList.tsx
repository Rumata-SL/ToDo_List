import React, {ChangeEvent, FC} from "react";
import {TaskType} from "./TodoList";
// import {Button} from "./Button";
import {EditableSpan} from "./EditableSpan";
import {Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

type TodoListInputProps = {
    tasks: Array<TaskType>
    removeTask: (todolistId: string, id: string) => void
    changeStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    todolistId:string
    changeTaskTitle:(todolistId:string, taskId:string, newValue:string)=>void
}

export const TasksList: FC<TodoListInputProps> = (
    {
        tasks,
        removeTask,
        changeStatus,
        todolistId,
        changeTaskTitle
    }
) => {
    const tasksJSXElements = tasks.map(t => {

        const onClickRemoveTask = () => removeTask(todolistId, t.id)

        const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
            changeStatus(todolistId, t.id, e.currentTarget.checked)
        }

        const onChangeTitleHandler = (newValue: string) => {
            changeTaskTitle(todolistId, t.id, newValue)
        }

        return (
            <div key={t.id} className={t.isDone ? "isDone" : ""}>
                <Checkbox checked={t.isDone} onChange={onChangeStatusHandler}  color="secondary"/>
                <EditableSpan title={t.title} onChange={onChangeTitleHandler}/>
                <IconButton onClick={onClickRemoveTask} color={"error"}>
                    <Delete />
                </IconButton>
                {/*<button onClick={onClickRemoveTask}>X</button>*/}

                {/*<span>{t.title}</span>*/}
                {/*<Button title={"X"} callback={onClickRemoveTask}/>*/}
            </div>
        )
    })

    return (
        <div>

                {tasksJSXElements}

        </div>
    );
};
