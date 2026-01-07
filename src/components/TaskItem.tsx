import { Task } from '../types/task.ts';

type TaskItemProps = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <li
      onClick={() => onToggle(task.id)}
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >
      {task.text}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task.id);
        }}
      >
        ❌
      </button>
    </li>
  );
};
