import React, {ChangeEvent, FC, KeyboardEvent, useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";


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

    return (
        <div>
            <Input
                title={title}
                setTitle={setTitle}
                error={error}
                setError={setError}
                callback={addTaskTitle}
            />
            <Button
                title={"+"}
                callback={addTaskTitle}
            />
            {error && <div className={"errorMessage"}>Title to required</div>}
        </div>
    )
}
