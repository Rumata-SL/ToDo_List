import React from "react";
import Button from "./Button";

type TodoListHeaderPropsType = {
    title: string
    removeTodolist:()=>void
}
const TodoListHeader = (props: TodoListHeaderPropsType) => {
    return (
        <div>
            <h3>
                {props.title}
                <Button title={"X"} callback={props.removeTodolist}/>
            </h3>
        </div>
    );
}

export default TodoListHeader;