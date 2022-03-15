import React, {useState} from "react";
import "./App.css";
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    const [tasks, setTask] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType>("all");

    const removeTask = ((id: string) => {
        const filteredTasks = tasks.filter(t => t.id !== id)
        setTask(filteredTasks)
    })

    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title,
            isDone: false
        }

        setTask([newTask, ...tasks])
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }
    let tasksForTodoList;

    switch (filter) {
        case "active":
            tasksForTodoList = tasks.filter(t => !t.isDone);
            break
        case "completed":
            tasksForTodoList = tasks.filter(t => t.isDone);
            break
        default:
            tasksForTodoList = tasks;

    }
    /*if (filter === "completed") {
        tasksForTodoList = tasks.filter(t => t.isDone === true);
    }else if(filter === "active") {
        tasksForTodoList = tasks.filter(t => t.isDone === false);
    }*/

    return (
        <div className="App">
            <TodoList
                title={"What to learn"}
                tasks={tasksForTodoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
