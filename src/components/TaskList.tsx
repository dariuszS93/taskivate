import { useState } from 'react';
import './TaskList.css';
import { useTasks } from '../hooks/useTasks.ts';
import { TaskItem } from './TaskItem.tsx';

const TaskList = () => {
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
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add task..."
      />
      <button onClick={handleAddTask}>Add task</button>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
