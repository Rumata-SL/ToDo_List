import React, {useEffect, useState} from "react"
import axios from "axios";
import {todolistsApi} from "../api/todolistApi";

export default {
    title: "API"
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
// здесь мы будем делать запрос и ответ закидывать в стейт.
// который в виде строки будем отображать в div-ке
            todolistsApi.getTodolists()
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
            todolistsApi.createTodolist()
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

            todolistsApi.deleteTodolist()
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

            todolistsApi.updateTodolistTitle()
                .then((res) => {
                    setState(res.data);
                })
        }, [])
        return <div> {JSON.stringify(state)}</div>
    }

