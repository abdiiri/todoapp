
function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span>{task.text}</span>

      <div className="actions">
        <button onClick={() => deleteTask(task.id)}>
          🗑
        </button>

        <button onClick={() => toggleTask(task.id)}>
          ✓
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
