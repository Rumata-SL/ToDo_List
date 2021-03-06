import React, {useEffect, useState} from "react"
import axios from "axios";
import {todolistsApi} from "../api/todolistApi";

export default {
    title: "API TODOLIST"
}

export const GetTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
// здесь мы будем делать запрос и ответ закидывать в стейт.
// который в виде строки будем отображать в div-ке
            todolistsApi.getTodolist()
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
            todolistsApi.createTodolist("Sergey")
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

            todolistsApi.deleteTodolist("0817d241-4a64-4cfa-a9e8-b385c5c5b514")
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

            todolistsApi.updateTodolistTitle("e63d39e1-5a76-4574-b3a5-5cc2bcc61413", "hello")
                .then((res) => {
                    setState(res.data);
                })
        }, [])
        return <div> {JSON.stringify(state)}</div>
    }

