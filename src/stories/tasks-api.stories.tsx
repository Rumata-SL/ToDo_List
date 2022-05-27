import React, {useEffect, useState} from "react"
import {todolistsApi} from "../api/todolistApi";

export default {
    title: "API TASK"
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.getTasks("b303f2fb-2963-4946-93cf-fb8b886c6cfe")
            .then((res) => {
                setState(res.data);
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)

    const deleteTask = ()=>{
        useEffect(() => {
            todolistsApi.deleteTask("b303f2fb-2963-4946-93cf-fb8b886c6cfe", "cd6952b1-c54c-4af7-afe9-e69cefe406b7")
                .then((res) => {
                    setState(res.data);
                })
        }, [])
    }
    return <div> {JSON.stringify(state)}
        <button onClick={deleteTask}>delete task</button>
    </div>
}

export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.createTasks("b303f2fb-2963-4946-93cf-fb8b886c6cfe", "AAAA")
            .then((res) => {
                setState(res.data);
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTasks = () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
            todolistsApi.updateTask("b303f2fb-2963-4946-93cf-fb8b886c6cfe","239b0861-b8f7-486b-90ea-7d6c82d79144", "hello")
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

