import React from "react";

type InputTypeProps={
    title: string
    setTitle:(title: string)=>void
    addTask?:(title:string)=>void
}
const Input = (props:InputTypeProps) => {

    return (
        <input/>
    );
};

export default Input;