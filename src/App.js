
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("todo")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text) {
    setTasks([...tasks, {
      id: Date.now(),
      text: text,
      completed: false
    }]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ));
  }

  const completed = tasks.filter(task => task.completed).length;

  return (
    <main className="app">
      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />

      <footer>
        <span>{tasks.length - completed} Tasks Left</span>
        <span>{completed} Completed</span>
      </footer>
    </main>
  );
}

export default App;
