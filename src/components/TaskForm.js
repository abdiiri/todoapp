
import { useState } from "react";

function TaskForm({ addTask }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return;

    addTask(text.trim());
    setText("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        placeholder="Add Task"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button type="submit">+</button>
    </form>
  );
}

export default TaskForm;
