import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import {tasks_1} from "./TodoList";


function App() {
    const todolistTitle_1: string = "What to learn";
    const todolistTitle_2: string = "What to buy";
    const todolistTitle_3: string = "What to read";

    return (
        <div className="App">
            <TodoList title={todolistTitle_1} tasks={tasks_1}/>
            <TodoList title={todolistTitle_2} tasks={tasks_1}/>
            <TodoList title={todolistTitle_3} tasks={tasks_1}/>
        </div>
    );
}

export default App;
