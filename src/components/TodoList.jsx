import { useState } from "react";
import './TodoList.css'

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("");

    const addTask = () => {
        const newTask = {id: Date.now(), text: taskText, completed: false};

        if(taskText.trim() === "") return;

        setTasks([...tasks, newTask]);
        setTaskText("");
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const markTaskAsCompleted = (id) => {
        setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
    };

    return(
        <div>
            <h2>Tasks list</h2>
            <input 
                type="text"
                value={taskText}
                onChange={e => setTaskText(e.target.value)}
                placeholder="Add task..."
            />
            <button onClick={addTask}>Add task</button>
            <ul>
                {
                    tasks.map((task) => (
                        <li 
                            key={task.id}
                            onClick={() => markTaskAsCompleted(task.id)}
                            style={{textDecoration: task.completed ? "line-through" : "none", cursor: "pointer"}}
                        >
                            {task.text}
                            <button onClick={(e) => { e.stopPropagation(); deleteTask(task.id)}}>❌</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoList;
