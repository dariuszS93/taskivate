import { Task } from '../types/task.ts';
import { useTaskStats } from '../hooks/useTaskStats.ts';

type Props = {
  tasks: Task[];
};

export const TaskStats = ({ tasks }: Props) => {
  const stats = useTaskStats(tasks);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <p>
        {stats.completed} / {stats.total} tasks completed
      </p>
      <p>Completion: {stats.completionRate}%</p>
    </div>
  );
};
