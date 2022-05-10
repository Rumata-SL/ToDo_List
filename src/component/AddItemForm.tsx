import React, {ChangeEvent, FC, KeyboardEvent, useState} from "react";
import {IconButton, TextField} from "@mui/material";
import {AddBox} from "@mui/icons-material";
/*import {Input} from "./Input";
import {Button} from "./Button";*/


type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm: FC<AddItemFormPropsType> = ({addItem}) => {
    console.log("AddItemForm")

    const [title, setTitle] = useState<string>("");

    // const [error, setError] = useState<boolean>(false);
    let [error, setError] = useState<string | null>(null)

    const addTaskTitle = () => {
        const trimAddTitle = title.trim()
        if (trimAddTitle) {
            addItem(trimAddTitle)
        } else {
            setError("Title to required")
        }
        setTitle("")
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(error !== null){
        setError(null)
        }
        setTitle(e.currentTarget.value)

    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTaskTitle();
        }
    }
    return (
        <div>
            <TextField
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                error={!!error}
                variant={"outlined"}
                size={"small"}
                label="Title"
                helperText={error}
                // className={error ? "error" : ""}
            />
            <IconButton size={"medium"} color={"primary"} onClick={addTaskTitle}><AddBox fontSize={"medium"}/></IconButton>
            {/*<button onClick={addTaskTitle}>+</button>*/}
            {/*{error && <div className={"errorMessage"}>Title to required</div>}*/}


            {/*<Input
                title={title}
                setTitle={setTitle}
                error={error}
                setError={setError}
                callback={addTaskTitle}
            />*/}

            {/*<Button
                title={"+"}
                callback={addTaskTitle}
            />*/}
        </div>
    )
}
