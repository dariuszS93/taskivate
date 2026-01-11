import TaskList from './components/TaskList.tsx';
import { TaskStats } from './components/TaskStats.tsx';
import { useTasks } from './hooks/useTasks.ts';

function App() {
  const tasksApi = useTasks();

  return (
    <div>
      <h1>Taskivate</h1>
      <TaskStats tasks={tasksApi.tasks} />
      <TaskList {...tasksApi} />
    </div>
  );
}

export default App;
