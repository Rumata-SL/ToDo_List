import React, {FC} from "react";

type EditableSpanPropsType= {
    title: string
}
export const EditableSpan:FC<EditableSpanPropsType> = ({title})=>{
    return(
        <span>{title}</span>
    )
}