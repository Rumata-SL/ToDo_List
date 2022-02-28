import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import {tasks_1} from "./TodoList";
import {tasks_2} from "./TodoList";
import {tasks_3} from "./TodoList";


function App() {
    return (
        <div className="App">
            <TodoList title={"What to learn"} tasks={tasks_1}/>
            <TodoList title={"What to buy"} tasks={tasks_2}/>
            <TodoList title={"What to read"} tasks={tasks_3}/>
        </div>
    );
}

export default App;
