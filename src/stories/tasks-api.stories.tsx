import React, {useEffect, useState} from "react"

import {todolistsApi} from "../api/todolistApi";

export default {
    title: "API TASK"
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
            todolistsApi.getTasks("e63d39e1-5a76-4574-b3a5-5cc2bcc61413")
            .then((res) => {
                setState(res.data);
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTasks =
    () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
            todolistsApi.deleteTask("0817d241-4a64-4cfa-a9e8-b385c5c5b514", "2341")
                .then((res) => {
                    setState(res.data);
                })
        }, [])
        return <div> {JSON.stringify(state)}</div>
    }

/*
export const CreateTasks =
    () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
            todolistsApi.createTasks()
                .then((res) => {
                    setState(res.data);
                })
        }, [])
        return <div> {JSON.stringify(state)}</div>
    }
export const DeleteTasks =
    () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {

            todolistsApi.deleteTodolist("0817d241-4a64-4cfa-a9e8-b385c5c5b514")
                .then((res) => {
                    setState(res.data);
                })
        }, [])
        return <div> {JSON.stringify(state)}</div>
    }
export const UpdateTasks =
    () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {

            todolistsApi.updateTodolistTitle("e63d39e1-5a76-4574-b3a5-5cc2bcc61413", "hello")
                .then((res) => {
                    setState(res.data);
                })
        }, [])
        return <div> {JSON.stringify(state)}</div>
    }
*/

