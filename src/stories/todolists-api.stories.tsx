import React, {useEffect, useState} from "react"
import axios from "axios";

export default {
    title: "API"
}

const settings = {
    withCredentials: true,
    headers:{
        "API-KEY": "4230ac11-a8d8-4cef-b716-b88af9bc0510"
    }
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
// здесь мы будем делать запрос и ответ закидывать в стейт.
// который в виде строки будем отображать в div-ке
        axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
            .then((res) => {
                setState(res.data);
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist =
    () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
            axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: "todolist1"}, settings)
                .then((res) => {
                    setState(res.data);
                })
        }, [])
        return <div> {JSON.stringify(state)}</div>
    }
export const DeleteTodolist =
    () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
            axios.delete("https://social-network.samuraijs.com/api/1.1/todo-lists/865f3242-6782-4f9b-9750-2b3b642880d1",  settings)
                .then((res) => {
                    setState(res.data);
                })
        }, [])
        return <div> {JSON.stringify(state)}</div>
    }
export const UpdateTodolistTitle =
    () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
            axios.put("https://social-network.samuraijs.com/api/1.1/todo-lists/4e0a398f-2929-414a-82b6-7428fa806e54", {title: "yoyo"}, settings)
                .then((res) => {
                    setState(res.data);
                })
        }, [])
        return <div> {JSON.stringify(state)}</div>
    }


/*
"core": {
    "builder": "@storybook/builder-webpack5"
},*/
