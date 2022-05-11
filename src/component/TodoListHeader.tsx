import React, {FC} from "react";
// import {Button} from "./Button";
import {EditableSpan} from "./EditableSpan";
import {IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

type TodoListHeaderPropsType = {
    title: string
    removeTodolist: () => void
    changeTodoListTitle: (title: string) => void
}

export const TodoListHeader: FC<TodoListHeaderPropsType> = (
    {
        title,
        removeTodolist,
        changeTodoListTitle
    }
) => {
    return (
        <div>
            <>
                <EditableSpan title={title} onChange={changeTodoListTitle}/>
                <IconButton onClick={removeTodolist} color={"success"}>
                    <Delete/>
                </IconButton>
                {/*<button onClick={removeTodolist}>X</button>*/}
                {/*<Button title={"X"} callback={removeTodolist}/>*/}
            </>
        </div>
    );
}
