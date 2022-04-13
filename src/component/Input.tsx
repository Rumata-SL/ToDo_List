import React, {ChangeEvent, FC, KeyboardEvent} from "react";

type InputTypeProps = {
    title: string
    setTitle: (title: string) => void
    callback: () => void
    error: boolean
    setError: (error: boolean) => void
}

const Input: FC<InputTypeProps> = (
    {
        setTitle,
        title,
        setError,
        callback,
        error
    }
) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            callback();
        }
    }

    return (
        <input value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               className={error ? "error" : ""}
        />
    );
};
// export default Input