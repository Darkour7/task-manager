import "./app.css";
import { Header } from "./components/Header";
import { LoadingScreen } from "./components/LoadingScreen";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { useTasks } from "./components/TaskList/hooks/useTasks";
import { LoadingProvider } from "./context/LoadingContext";

function App() {
  const {
    tasks,
    addTask,
    deleteTask,
    updateTask,
    completeAllTasks,
    clearTasks,
  } = useTasks();
  return (
    <LoadingProvider>
      <Header />
      <div className="layout">
        <LoadingScreen />
        <TaskInput addFn={addTask} />
        <TaskList tasks={tasks} updateFn={updateTask} deleteFn={deleteTask} />
        <div className="floating-actions">
          <button disabled={tasks.length === 0} onClick={completeAllTasks}>
            Complete all tasks
          </button>
          <button disabled={tasks.length === 0} onClick={clearTasks}>
            Clear all tasks
          </button>
        </div>
      </div>
    </LoadingProvider>
  );
}

export default App;
