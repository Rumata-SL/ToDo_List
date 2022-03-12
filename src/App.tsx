import React, {useState} from "react";
import "./App.css";
import TodoList, {TaskType} from "./TodoList";

export type FilterValueType = "all" | "active" | "completed";

function App() {

    const [tasks, setTask] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValueType>("all");

    const removeTask = ((id: number) => {
        const filteredTasks = tasks.filter(t => t.id !== id)
        setTask(filteredTasks)
    })
    const changeFilter = (value: FilterValueType) => {
        setFilter(value)
    }
    let tasksForTodoList = tasks;
    if (filter === "completed") {
        tasksForTodoList = tasks.filter(t => t.isDone === true);
    }

    if (filter === "active") {
        tasksForTodoList = tasks.filter(t => t.isDone === false);
    }

    return (
        <div className="App">
            <TodoList
                title={"What to learn"}
                tasks={tasksForTodoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
