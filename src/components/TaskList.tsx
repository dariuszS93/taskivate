import { useState } from 'react';
import './TaskList.css';
import { TaskItem } from './TaskItem.tsx';
import { Task } from '../types/task.ts';

type Props = {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

const TaskList = ({ tasks, addTask, toggleTask, deleteTask }: Props) => {
  const [taskText, setTaskText] = useState<string>('');

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
