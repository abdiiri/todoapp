
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <section className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </section>
  );
}

export default TaskList;
