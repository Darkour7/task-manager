import { useEffect, useState } from "react";
import { Task } from "../../../classes/Task";

export function useTasks() {
  const [tasks, setTasks] = useState([new Task("Create Tasks")]);

  useEffect(() => {
    console.log("Adding task...", tasks);
  }, [tasks]);

  const deleteTask = (id) => {
    const aux = [];
    tasks.map((task) => {
      if (task.id !== id) aux.push(task);
    });
    setTasks(aux);
    /* setTasks([...aux]); */
  };

  const updateTask = (task) => {
    const aux = [...tasks];
    const index = aux.findIndex((t) => t.id === task.id);
    aux[index] = task;
    setTasks(aux);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const completeAllTasks = () => {
    const aux = [...tasks];
    aux.forEach((task) => (task.state = "COMPLETED"));
    setTasks(aux);
  };

  const addTask = (todo) => {
    const task = new Task(todo);
    setTasks((prev) => [...prev, task]);
  };

  return {
    tasks,
    addTask,
    deleteTask,
    updateTask,
    clearTasks,
    completeAllTasks,
  };
}
