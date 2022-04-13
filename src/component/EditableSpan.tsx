import React, {ChangeEvent, FC, useState} from "react";

type EditableSpanPropsType = {
    title: string
    onChange: (newValue: string) => void
}
export const EditableSpan: FC<EditableSpanPropsType> = ({title, onChange}) => {

    const [newTitle, setNewTitle] = useState<string>("");
    const [editMode, setEditMode] = useState<boolean>(false)


    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
        // setError(false)
    }

    const activateEditMode = () => {
        setEditMode(true)
        setNewTitle(title)

    }

    const activateViewMode = () => {
        setEditMode(false)
        onChange(newTitle)
    }


    return (
        editMode
            ? <input onBlur={activateViewMode} value={newTitle} onChange={onChangeTitleHandler} autoFocus/>
            : <span onDoubleClick={activateEditMode}>{title}</span>
    )
}