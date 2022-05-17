import {v1} from "uuid";
import React from "react";
import {Provider} from "react-redux";
import {tasksReducer} from "../reducers/tasks-reducer";
import {combineReducers, legacy_createStore} from "redux";
import {todolistsReducer} from "../reducers/todolists-reducer";
import {AppRootState} from "../store/store";

const rootReducer = combineReducers({
    todolist:todolistsReducer,
    tasks: tasksReducer,
})


let initialGlobalState = {
    todolist :[
        {id: 'todolistId1', title: "What to learn", filter: "all"},
        {id: 'todolistId2', title: "What to read", filter: "all"}
    ],

    tasks :{
        ['todolistId1']: [
            {id: v1(), title: "Mahabharata", isDone: true},
            {id: v1(), title: "Sovereign", isDone: true},
            {id: v1(), title: "Dialogs", isDone: false},
            {id: v1(), title: "Faust", isDone: false},
            {id: v1(), title: "Generation P", isDone: false}
        ],
        ['todolistId2']: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "Redux", isDone: false},
            {id: v1(), title: "GrahpQl", isDone: false}
        ]
    }
}

export const storyBookStore = legacy_createStore(rootReducer, initialGlobalState as AppRootState );

export const ReduxStoreProviderDecorator=(storyFN:any)=>{
    return <Provider store={storyBookStore}> {storyFN()} </Provider>
}