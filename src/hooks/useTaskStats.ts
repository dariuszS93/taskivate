import { Task } from '../types/task.ts';
import { calculateTasksStats } from '../utils/taskStats.ts';

export const useTaskStats = (tasks: Task[]) => {
  return calculateTasksStats(tasks);
};
