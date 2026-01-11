import { Task } from '../types/task.ts';

export type TasksStats = {
  total: number;
  completed: number;
  remaining: number;
  completionRate: number;
};

export const calculateTasksStats = (tasks: Task[]): TasksStats => {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const remaining = total - completed;
  const completionRate =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return { total, completed, remaining, completionRate };
};
