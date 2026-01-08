import { Task } from '../types/task.ts';
import { tasksReducer } from './useTasks.ts';

describe('tasksReducer', () => {
  it('adds a new task', () => {
    const initialState: Task[] = [];
    const result = tasksReducer(initialState, {
      type: 'ADD_TASK',
      payload: { text: 'Learn React' },
    });
    expect(result).toHaveLength(1);
    expect(result[0].text).toBe('Learn React');
    expect(result[0].completed).toBe(false);
  });

  it('toggles task completion', () => {
    const initialState: Task[] = [
      { id: 1, text: 'New Task', completed: false },
    ];

    const result = tasksReducer(initialState, {
      type: 'TOGGLE_TASK',
      payload: { id: 1 },
    });

    expect(result[0].completed).toBe(true);
  });

  it('deletes a task', () => {
    const initialState: Task[] = [
      { id: 1, text: 'Task to delete', completed: true },
    ];
    const result = tasksReducer(initialState, {
      type: 'DELETE_TASK',
      payload: { id: 1 },
    });
    expect(result).toHaveLength(0);
  });
});
