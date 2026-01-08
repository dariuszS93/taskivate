import { useReducer } from 'react';
import { Task } from '../types/task';

type TaskAction =
  | { type: 'ADD_TASK'; payload: { text: string } }
  | { type: 'TOGGLE_TASK'; payload: { id: number } }
  | { type: 'DELETE_TASK'; payload: { id: number } };

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD_TASK': {
      return [
        ...state,
        { id: Date.now(), text: action.payload.text, completed: false },
      ];
    }
    case 'TOGGLE_TASK': {
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task,
      );
    }
    case 'DELETE_TASK': {
      return state.filter((task) => task.id !== action.payload.id);
    }
    default:
      return state;
  }
};

export const useTasks = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const addTask = (text: string) => {
    dispatch({ type: 'ADD_TASK', payload: { text } });
  };

  const toggleTask = (id: number) => {
    dispatch({ type: 'TOGGLE_TASK', payload: { id } });
  };

  const deleteTask = (id: number) => {
    dispatch({ type: 'DELETE_TASK', payload: { id } });
  };

  return { tasks, addTask, toggleTask, deleteTask };
};
