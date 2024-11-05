import { useContext, useRef } from "react";
import { LoadingContext } from "../../context/LoadingContext";
import "./index.css";

export function TaskInput({ addFn }) {
  const inputRef = useRef();
  const { setLoading } = useContext(LoadingContext);
  const randomTask = () => {
    setLoading(true);
    fetch("https://dummyjson.com/todos/random")
      .then((res) => res.json())
      .then((data) => {
        addFn(data.todo);
        setLoading(false);
      });
  };
  return (
    <div className="task-input">
      <input
        type="text"
        id="taskInput"
        ref={inputRef}
        placeholder="Write a task down..."
      />
      <button onClick={() => addFn(inputRef.current.value)}>Add</button>
      <button onClick={randomTask}>Add random</button>
    </div>
  );
}
