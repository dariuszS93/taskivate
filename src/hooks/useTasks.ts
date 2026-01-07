import { useState } from 'react';
import { Task } from '../types/task';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  const toggleTask = (taskId: number) => {
    setTasks((previousTask) =>
      previousTask.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId),
    );
  };

  return { tasks, addTask, toggleTask, deleteTask };
};
