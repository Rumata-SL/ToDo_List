import React from "react";

type ButtonPropsType = {
    title: string
    callback: () => void
    buttonClass?: string
}
const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button className={props.buttonClass} onClick={onClickHandler}>{props.title}</button>
    );
};
export default Button;
