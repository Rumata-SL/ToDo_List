import React from "react";
import {action} from "@storybook/addon-actions";

import {ComponentMeta} from "@storybook/react";
import {Provider} from "react-redux";

import {v1} from "uuid";
import {combineReducers, legacy_createStore} from "redux";
import {todolistsReducer} from "./reducers/todolists-reducer";
import {tasksReducer} from "./reducers/tasks-reducer";
import {AppRootState} from "./store/store";
import AppWithRedux from "./AppWithRedux";

const rootReducer = combineReducers({
    todolist: todolistsReducer,
    tasks: tasksReducer
});

let initialGlobalState = {
    todolist :[
        {id: 'todolistId1', title: "What to learn", filter: "all"},
        {id: 'todolistId2', title: "What to read", filter: "all"}
    ],

    tasks :{
        ['todolistId1']: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
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

const myStore = legacy_createStore(rootReducer, initialGlobalState as AppRootState)


export default {
    title: 'AppWithRedux Component',
    component: AppWithRedux,
    decorators: [
        (Story: any) => (<Provider store={myStore}><Story/></Provider>),
    ]
} as ComponentMeta<typeof AppWithRedux>


const onChangeTextCallback = action('Text was changed')

export const App_BaseExample = () => {
    return <AppWithRedux/>
}