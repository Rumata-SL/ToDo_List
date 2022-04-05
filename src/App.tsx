import React, {useState} from "react";
import "./App.css";
import {TodoList, TaskType} from "./TodoList";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";


export type FilterValuesType = "all" | "active" | "completed";

type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
type TaskObjType = {
    [key: string]: Array<TaskType>
}

function App() {

    const removeTodolist = (todolistId: string) => {
        let filteredTodolist = todoLists.filter(tl => tl.id !== todolistId)
        setTodoLists(filteredTodolist)
        delete tasksobj[todolistId]
        setTask({...tasksobj})
    }

    /*const removeTask = ((todolistId: string, id: string) => {
        let tasks = tasksobj[todolistId]
        let filteredTasks = tasks.filter(t => t.id !== id)
        tasksobj[todolistId] = filteredTasks
        setTask({...tasksobj})
    })*/

    const removeTask = (todolistId: string, id: string) => {
        setTask({...tasksobj, [todolistId]: tasksobj[todolistId].filter(t => t.id !== id)})
    }

    const addTask = (todolistId: string, title: string) => {
        let newTask: TaskType = {
            id: v1(),
            title,
            isDone: false
        }
        /*let tasks = tasksobj[todolistId]
        let newTasks = [task, ...tasks]
        tasksobj[todolistId] = newTasks*/
        setTask({...tasksobj, [todolistId]: [newTask, ...tasksobj[todolistId]]})
    }

    /*const changeFilter = (value: FilterValuesType, todolistId: string) => {
        let todolist = todoLists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value;
            setTodoLists([...todoLists])
        }
    }*/

    const changeFilter = (todolistId: string, value: FilterValuesType) => {
        setTodoLists(todoLists.map(filtered => filtered.id === todolistId ? {...filtered, filter: value} : filtered))
    }

    const changeStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        /*let tasks = tasksobj[todolistId]
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = !task.isDone
        }*/
        setTask({...tasksobj, [todolistId]: tasksobj[todolistId].map(t => t.id === taskId ? {...t, isDone} : t)});
    }

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to read", filter: "all"}
    ])

    let [tasksobj, setTask] = useState<TaskObjType>({
        [todolistId1]: [
            {id: v1(), title: "Mahabharata", isDone: true},
            {id: v1(), title: "Sovereign", isDone: true},
            {id: v1(), title: "Dialogs", isDone: false},
            {id: v1(), title: "Faust", isDone: false},
            {id: v1(), title: "Generation P", isDone: false}
        ],
        [todolistId2]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "Redux", isDone: false},
            {id: v1(), title: "GrahpQl", isDone: false}
        ]
    })

    const addTodoList = (title: string) => {
        let todoList: TodolistType = {
            id: v1(),
            title: title,
            filter: "all",
        }
        setTodoLists([todoList, ...todoLists])
        setTask({
            ...tasksobj,
            [todoList.id]: []
        })
    }

    return (
        <div className="App">
            <div className={"header"}>
                <h1>Create ToDoList</h1>
                <AddItemForm addItem={addTodoList}/>
            </div>
            <div className={"main"}>

                {
                    todoLists.map((tl) => {
                        let tasksForTodoList = tasksobj[tl.id];
                        switch (tl.filter) {
                            case "active":
                                tasksForTodoList = tasksForTodoList.filter(t => !t.isDone);
                                break
                            case "completed":
                                tasksForTodoList = tasksForTodoList.filter(t => t.isDone);
                                break
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
                            removeTodolist={removeTodolist}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default App;
