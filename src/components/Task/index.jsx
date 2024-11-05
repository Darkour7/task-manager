import "./index.css";

export function Task({ task, updateFn, deleteFn }) {
  return (
    <div
      className={
        "task-container " +
        (task.state === "COMPLETED"
          ? "completed-task"
          : task.state === "ONGOING"
          ? "ongoing-task"
          : "normal-task")
      }
    >
      <div className="task-name">
        <span>{task.name}</span>
      </div>
      <div className="task-actions">
        <button
          disabled={task.state === "COMPLETED"}
          onClick={() => {
            task.toggleOnGoing();
            updateFn(task);
          }}
        >
          {task.state === "ONGOING" ? "Stop" : "Start"}
        </button>
        <button onClick={() => deleteFn(task.id)}>Delete</button>
        <label className="task-check">
          <input
            id={`taskCheck${task.id}`}
            type="checkbox"
            checked={task.state === "COMPLETED"}
            onChange={() => {
              task.toggleCompletion();
              updateFn(task);
            }}
          />
        </label>
      </div>
    </div>
  );
}
