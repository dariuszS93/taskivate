import { useState } from 'react';
import './TodoList.css';
import { useTasks } from '../hooks/useTasks.ts';

const TodoList = () => {
  const [taskText, setTaskText] = useState<string>('');
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  const handleAddTask = () => {
    if (!taskText.trim()) {
      return;
    }
    addTask(taskText.trim());
    setTaskText('');
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
      <button onClick={handleAddTask}>Add task</button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
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
