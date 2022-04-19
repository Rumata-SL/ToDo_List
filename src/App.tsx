import React, {useState} from "react";
import "./App.css";
import {TodoList, TaskType} from "./component/TodoList";
import {v1} from "uuid";
import {AddItemForm} from "./component/AddItemForm";


export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
type TaskObjType = {
    [key: string]: Array<TaskType>
}

function App() {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to read", filter: "all"}
    ])

    let [tasksObj, setTask] = useState<TaskObjType>({
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

    const removeTodolist = (todolistId: string) => {


        setTodoLists(todoLists.filter(tl => tl.id !== todolistId))
        delete tasksObj[todolistId];
        setTask({...tasksObj});
    }

    const removeTask = (todolistId: string, id: string) => {
        setTask({...tasksObj, [todolistId]: tasksObj[todolistId].filter(t => t.id !== id)})
    }

    const changeFilter = (todolistId: string, value: FilterValuesType) => {
        setTodoLists(todoLists.map(filtered => filtered.id === todolistId ? {...filtered, filter: value} : filtered))
    }

    const changeStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        setTask({...tasksObj, [todolistId]: tasksObj[todolistId].map(t => t.id === taskId ? {...t, isDone} : t)});
    }

    const addTask = (todolistId: string, title: string) => {
        let newTask: TaskType = {
            id: v1(),
            title,
            isDone: false
        }
        setTask({...tasksObj, [todolistId]: [newTask, ...tasksObj[todolistId]]})
    }

    const addTodoList = (title: string) => {
        let todoList: TodolistType = {
            id: v1(),
            title,
            filter: "all",
        }
        setTodoLists([todoList, ...todoLists])
        setTask({
            ...tasksObj,
            [todoList.id]: []
        })
    }

    const changeTaskTitle = (todolistId: string, taskId: string, newValue: string) => {
        setTask({
            ...tasksObj, [todolistId]: tasksObj[todolistId].map(el => el.id === taskId
                ? {...el, title: newValue}
                : el)
        })
    }

    const changeTodoListTitle = (todolistID: string, newTitle: string) => {

        setTodoLists(todoLists.map(el => el.id === todolistID ? {...el, title: newTitle} : el))
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
                        let tasksForTodoList = tasksObj[tl.id];
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
                            changeTaskTitle={changeTaskTitle}
                            changeTodoListTitle={changeTodoListTitle}

                        />
                    })
                }
            </div>
        </div>
    );
}

export default App;
