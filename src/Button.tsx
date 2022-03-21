import React from "react";

type ButtonPropsType = {
    title: string
    callback: () => void
}
const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button onClick={onClickHandler}>{props.title}</button>
    );
};
export default Button;
