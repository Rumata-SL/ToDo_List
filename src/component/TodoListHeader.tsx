import React, {FC} from "react";
// import {Button} from "./Button";
import {EditableSpan} from "./EditableSpan";

type TodoListHeaderPropsType = {
    title: string
    removeTodolist: () => void
    changeTodoListTitle:(title:string)=>void
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
            <h3>
                <EditableSpan title={title} onChange={changeTodoListTitle}/>
                <button onClick={removeTodolist}>X</button>


                {/*<Button title={"X"} callback={removeTodolist}/>*/}
            </h3>
        </div>
    );
}
