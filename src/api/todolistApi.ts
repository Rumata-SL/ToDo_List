import axios from "axios";
import {
    CreateTodolist,
    DeleteTodolist,
    UpdateTodolistTitle
} from "../stories/todolists-api.stories";

/*const settings = {
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "4230ac11-a8d8-4cef-b716-b88af9bc0510"
    }
}*/

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "4230ac11-a8d8-4cef-b716-b88af9bc0510"
    }
})


export const todolistsApi = {
    getTodolists() {
        const promise = instance.get(`todo-lists`)
        return promise
    },
    createTodolist() {
        const promise =  instance.post(`todo-lists`, {title: "Nika"})
                return promise
    },
    deleteTodolist(){
        const todolistId = "20745c52-3a57-43fd-b6aa-fd30d0c93bae"
        const promise = instance.delete(`todo-lists/${todolistId}`)
        return promise
    },
    updateTodolistTitle(){
        const todolistId = "788d6654-5c4a-4f97-99b6-3888fab3dda6"
        const promise = instance.put(`todo-lists/${todolistId}`, {title: "yoyo"})
        return promise
    }

}