import API from "../services/api";
import { toast } from "react-toastify";

function TaskCard({ task, fetchTasks, setEditingTask }) {

  const deleteTask = async () => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await API.delete(`/${task._id}`);
      toast.success("Task deleted");
      fetchTasks();
    } catch (error) {
      console.error(error);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
  
        <h4>{task.title}</h4>
  
        <p className="text-muted">
          {task.description}
        </p>
  
        <span
          className={`badge mb-3 ${
            task.status === "Completed"
              ? "bg-success"
              : task.status === "In Progress"
              ? "bg-warning text-dark"
              : "bg-secondary"
          }`}
        >
          {task.status}
        </span>
  
        <p>
          <strong>Due:</strong>{" "}
          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString()
            : "N/A"}
        </p>
  
        <button
          className="btn btn-warning me-2"
          onClick={() => setEditingTask(task)}
        >
          Edit
        </button>
  
        <button
          className="btn btn-danger"
          onClick={deleteTask}
        >
          Delete
        </button>
  
      </div>
    </div>
  );
}

export default TaskCard;