import React from "react";
import {action} from "@storybook/addon-actions";
import AppWithRedux from "./AppWithRedux";
// import {Provider} from "react-redux";
// import {store} from "./store/store";
import {
    ReduxStoreProviderDecorator
} from "./stories/ReduxStoreProviderDecorator";


export default {
    title:'AppWithRedux Component',
    component: AppWithRedux,
    decorators:[ReduxStoreProviderDecorator]
}

// const activateViewModecallback = action("Status changed activateViewMode")


export const AppWithReduxBaseExample = (props:any)=>{
    return <AppWithRedux/>
}