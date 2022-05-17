import React from "react";

import {action} from "@storybook/addon-actions";
import {TasksList} from "./TasksList";

export default {
    title:'TasksList Component',
    component: TasksList
}

const removeTaskcallback = action("Status changed removeTask")
const changeStatuscallback = action("Status changed changeStatus")
const changeTaskTitlecallback = action("Status changed changeTaskTitle")

export const TasksBaseExample = (props:any)=>{
    return <>
        <TasksList
            tasks={{id:'1',title:'CSS',isDone:true}}
            removeTask={removeTaskcallback}
            changeStatus={changeStatuscallback}
            changeTaskTitle={changeTaskTitlecallback}
            todolistId={'todolistId1'}
        />
        <TasksList
            tasks={{id:'2',title:'JS',isDone:false}}
            removeTask={removeTaskcallback}
            changeStatus={changeStatuscallback}
            changeTaskTitle={changeTaskTitlecallback}
            todolistId={'todolistId2'}
        />

    </>
}