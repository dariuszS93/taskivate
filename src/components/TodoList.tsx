import { useState } from 'react';
import './TodoList.css';
import { Task } from '../types/task.ts';

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>('');

  const addTask = () => {
    const newTask: Task = { id: Date.now(), text: taskText, completed: false };

    if (taskText.trim() === '') return;

    setTasks((prev) => [...prev, newTask]);
    setTaskText('');
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTaskCompleted = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div>
      <h2>Tasks list</h2>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add task..."
      />
      <button onClick={addTask}>Add task</button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTaskCompleted(task.id)}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {task.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(task.id);
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
