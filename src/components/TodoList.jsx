import React, { useState } from "react";
import "../styles/TodoList.css";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            setTasks([
                ...tasks,
                { id: Date.now(), text: newTask, completed: false },
            ]);
            setNewTask("");
        }
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const removeTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className="todo-list-container">
            <div className="todo-header">
                <h3>ToDo List</h3>
            </div>
            <div className="todo-input">
                <input
                    type="text"
                    placeholder="Add a new task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={handleAddTask}>
                    <h2>➕</h2>
                </button>
            </div>
            <ul className="todo-tasks">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={task.completed ? "completed" : ""}
                    >
                        <span onClick={() => toggleTaskCompletion(task.id)}>
                            {task.text}
                        </span>
                        <button
                            className="delete-task"
                            onClick={() => removeTask(task.id)}
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
