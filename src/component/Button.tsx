import React, {FC} from "react";

type ButtonPropsType = {
    title: string
    callback: () => void
    buttonClass?: string
}
const Button: FC<ButtonPropsType> = (
    {
        title,
        callback,
        buttonClass
    }
) => {
    const onClickHandler = () => {
        callback()
    }
    return (
        <button className={buttonClass} onClick={onClickHandler}>{title}</button>
    );
};

// export default Button