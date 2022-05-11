import React, {ChangeEvent, FC, useCallback} from "react";
import {TaskType} from "./TodoList";
// import {Button} from "./Button";
import {EditableSpan} from "./EditableSpan";
import {Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

type TodoListInputProps = {
    // tasks: Array<TaskType>
    tasks: TaskType
    removeTask: (todolistId: string, id: string) => void
    changeStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    todolistId:string
    changeTaskTitle:(todolistId:string, taskId:string, newValue:string)=>void
}

export const TasksList: FC<TodoListInputProps> = React.memo((
    {
        tasks,
        removeTask,
        changeStatus,
        todolistId,
        changeTaskTitle
    }
) => {

        const onClickRemoveTask = useCallback(() => removeTask(todolistId, tasks.id),[removeTask, todolistId, tasks.id])

        const onChangeStatusHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            changeStatus(todolistId, tasks.id, e.currentTarget.checked)
        },[changeStatus, todolistId, tasks.id])

        const onChangeTitleHandler = useCallback((newValue: string) => {
            changeTaskTitle(todolistId, tasks.id, newValue)
        },[changeTaskTitle, todolistId, tasks.id])


        return (
            <div className={tasks.isDone ? "isDone" : ""}>
                <Checkbox checked={tasks.isDone} onChange={onChangeStatusHandler}  color="secondary"/>
                <EditableSpan title={tasks.title} onChange={onChangeTitleHandler}/>
                <IconButton onClick={onClickRemoveTask} color={"error"}>
                    <Delete />
                </IconButton>
                {/*<button onClick={onClickRemoveTask}>X</button>*/}

                {/*<span>{t.title}</span>*/}
                {/*<Button title={"X"} callback={onClickRemoveTask}/>*/}
            </div>

        )
});
