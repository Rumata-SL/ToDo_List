import React from "react";

import {action} from "@storybook/addon-actions";
import {TasksList} from "./TasksList";
import {EditableSpan} from "./EditableSpan";

export default {
    title:'EditableSpan Component',
    component: EditableSpan
}

const activateViewModecallback = action("Status changed activateViewMode")


export const EditableSpanBaseExample = (props:any)=>{
    return <>
        <EditableSpan title={'New Task'} onChange={activateViewModecallback}/>
    </>
}