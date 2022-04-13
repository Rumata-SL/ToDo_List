import React, {ChangeEvent, FC, KeyboardEvent, useState} from "react";
/*import {Input} from "./Input";
import {Button} from "./Button";*/


type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm: FC<AddItemFormPropsType> = ({addItem}) => {

    const [title, setTitle] = useState<string>("");

    const [error, setError] = useState<boolean>(false);

    const addTaskTitle = () => {
        const trimAddTitle = title.trim()
        if (trimAddTitle) {
            addItem(trimAddTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)

    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTaskTitle();
        }
    }
    return (
        <div>
            <input
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                className={error ? "error" : ""}
            />
            <button onClick={addTaskTitle}>+</button>
            {error && <div className={"errorMessage"}>Title to required</div>}


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
