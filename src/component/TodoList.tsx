import React, {useCallback} from "react";
import {TodoListHeader} from "./TodoListHeader";
// import {Button} from "./Button";
import {TasksList} from "./TasksList";
import {FilterValuesType} from "../App";
import {AddItemForm} from "./AddItemForm";
import {Button} from "@mui/material";


export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (todolistId: string, id: string) => void
    changeFilter: (todolistId: string, value: FilterValuesType) => void
    addTask: (todolistId: string, title: string) => void
    changeStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    changeTaskTitle: (todolistId: string, id: string, newValue: string,) => void
    filter: FilterValuesType
    id: string
    removeTodolist: (todolistId: string) => void
    changeTodoListTitle: (todolistId: string, newTitle: string) => void

}

export const TodoList = React.memo((props: TodoListPropsType) => {

    let onAllClickHandler = useCallback(() => {
        props.changeFilter(props.id, "all")
    }, [])
    const onActiveClickHandler = useCallback(() => {
        props.changeFilter(props.id, "active")
    }, [])
    const onCompletedClickHandler = useCallback(() => {
        props.changeFilter(props.id, "completed")
    }, [])

    const removeTodolist = useCallback(() => {
        props.removeTodolist(props.id)
    }, [props.removeTodolist, props.id])


    const addItem = useCallback((title: string) => {
        props.addTask(props.id, title)
    }, [props.addTask, props.id])

    const changeTodoListTitle = useCallback((newTitle: string) => {
        props.changeTodoListTitle(props.id, newTitle)
    }, [props.changeTodoListTitle, props.id])

    let tasksForTodoList = props.tasks
    switch (props.filter) {
        case "active":
            tasksForTodoList = props.tasks.filter(t => !t.isDone);
            break;
        case "completed":
            tasksForTodoList = props.tasks.filter(t => t.isDone);
            break;
    }
    return (
        <div className={"wrapper"}>
            <div className={"wrapperBox"}>
                <div><TodoListHeader
                    title={props.title}
                    removeTodolist={removeTodolist}
                    changeTodoListTitle={changeTodoListTitle}
                />

                    <AddItemForm addItem={addItem}/>

                    {tasksForTodoList.map(t => < TasksList
                        key={t.id}
                        tasks={t}
                        removeTask={props.removeTask}
                        changeStatus={props.changeStatus}
                        todolistId={props.id}
                        changeTaskTitle={props.changeTaskTitle}
                    />)}

                </div>

                <div className={"buttonsBox"}>
                    <Button
                        variant={props.filter === "all" ? "contained" : "outlined"}
                        onClick={onAllClickHandler}
                    >All
                    </Button>
                    <Button
                        variant={props.filter === "active" ? "contained" : "outlined"}
                        onClick={onActiveClickHandler}
                        color={"primary"}>Active
                    </Button>
                    <Button
                        variant={props.filter === "completed" ? "contained" : "outlined"}
                        onClick={onCompletedClickHandler}
                        color={"secondary"}>Completed
                    </Button>

                </div>
            </div>
        </div>
    )
})
