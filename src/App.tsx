import React, {useState} from "react";
import './App.css';
import TodoList, {TaskType} from "./TodoList";


function App() {

     const [tasks, setTask] = useState( [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ])
    /*let tasks: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]*/

    const removeTask = ((id: number) => {
        const filteredTasks = tasks.filter(t=> t.id !== id)
        setTask(filteredTasks)
        // tasks = tasks.filter(t => t.id !== id)


    })
    return (
        <div className="App">
            <TodoList title={"What to learn"} tasks={tasks} removeTask={removeTask}/>

        </div>
    );
}

export default App;
