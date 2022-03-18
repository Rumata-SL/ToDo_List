import React, {ChangeEvent, KeyboardEvent} from "react";

type InputTypeProps = {
    title: string
    setTitle: (title: string) => void
    callback: () => void
}
const Input = ({setTitle, title, ...props}: InputTypeProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.callback();
        }
    }

    return (
        <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
    );
};

export default Input;