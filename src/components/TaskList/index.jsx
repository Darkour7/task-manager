import "./index.css";
import { Task } from "../Task";

export function TaskList({ deleteFn, updateFn, tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteFn={deleteFn}
          updateFn={updateFn}
        />
      ))}
    </div>
  );
}
