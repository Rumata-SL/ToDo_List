import React, {ChangeEvent, KeyboardEvent} from "react";

type InputTypeProps = {
    title: string
    setTitle: (title: string) => void
    callback: () => void
    error: boolean
    setError: (error: boolean) => void
}
const Input = ({setTitle, title, ...props}: InputTypeProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        props.setError(false)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.callback();
        }
    }

    return (
        <input value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               className={props.error ? "error" : ""}
        />
    );
};

export default Input;