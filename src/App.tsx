import React, {useState} from "react";
import "./App.css";
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed";
type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    /*const [tasksobj, setTask] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: false},
        {id: v1(), title: "GrahpQl", isDone: false},
    ])*/

    // const [filter, setFilter] = useState<FilterValuesType>("all");

    const removeTask = ((id: string, todolistId: string) => {
        let tasks = tasksobj[todolistId]
        let filteredTasks = tasks.filter(t => t.id !== id)
        tasksobj[todolistId]= filteredTasks
        setTask({...tasksobj})
    })

    const addTask = (title: string, todolistId: string) => {
        let task: TaskType = {
            id: v1(),
            title,
            isDone: false
        }
        let tasks = tasksobj[todolistId]
        let newTasks = [task, ...tasks]
        tasksobj[todolistId]=newTasks
        setTask({...tasksobj})
    }

    const changeFilter = (value: FilterValuesType, todolistId: string) => {
        // setFilter(value)
        let todolist = todoLists.find(tl => tl.id === todolistId)
        if(todolist){
            todolist.filter = value;
            setTodoLists([...todoLists])
        }
    }

    const changeStatus = (taskId: string, isDone: boolean, todolistId: string ) => {
        let tasks = tasksobj[todolistId]
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = !task.isDone
        }
        setTask({...tasksobj});
    }

   /* let tasksForTodoList;
    switch (filter) {
        case "active":
            tasksForTodoList = tasksobj.filter(t => !t.isDone);
            break
        case "completed":
            tasksForTodoList = tasksobj.filter(t => t.isDone);
            break
        default:
            tasksForTodoList = tasksobj;
    }*/

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn", filter: "active"},
        {id: todolistId2, title: "What to read", filter: "completed"}
    ])

    let [tasksobj, setTask]=useState({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "Redux", isDone: false},
            {id: v1(), title: "GrahpQl", isDone: false}
        ],
        [todolistId2]:[
            {id: v1(), title: "Mahabharata", isDone: true},
            {id: v1(), title: "Sovereign", isDone: true},
            {id: v1(), title: "Dialogs", isDone: false},
            {id: v1(), title: "Faust", isDone: false},
            {id: v1(), title: "Generation P", isDone: false}
        ]
    })

    return (
        <div className="App">
            {

                todoLists.map((tl)=>{
                    let tasksForTodoList = tasksobj[tl.id];
                    switch (tl.filter) {
                        case "active":
                            tasksForTodoList = tasksForTodoList.filter(t => !t.isDone);
                            break
                        case "completed":
                            tasksForTodoList = tasksForTodoList.filter(t => t.isDone);
                            break
                        default:
                            tasksForTodoList = tasksForTodoList;
                    }
                    return <TodoList
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodoList}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeStatus={changeStatus}
                        filter={tl.filter}
                    />
                })
            }
            {/*<TodoList
                title={"What to learn"}
                tasksobj={tasksForTodoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeStatus={changeStatus}
                filter={filter}
            />*/}
        </div>
    );
}

export default App;
