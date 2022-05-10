import React, {ChangeEvent, FC, useCallback, useState} from "react";
import {TextField} from "@mui/material";

type EditableSpanPropsType = {
    title: string
    onChange: (newValue: string) => void
}
export const EditableSpan: FC<EditableSpanPropsType> = React.memo(({title, onChange}) => {

    const [newTitle, setNewTitle] = useState<string>("");
    const [editMode, setEditMode] = useState<boolean>(false)


    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const activateEditMode = () => {
        setEditMode(true)
        setNewTitle(title)

    }

    const activateViewMode = useCallback(() => {
        setEditMode(false)
        onChange(newTitle)
    },[onChange,newTitle])


    return (
        editMode
            ? <TextField onBlur={activateViewMode} value={newTitle} onChange={onChangeTitleHandler} autoFocus variant={"outlined"}
                         size={"small"}/>
            : <span onDoubleClick={activateEditMode}>{title}</span>
    )
})