import API from "../services/api";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";

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
    <div className="card shadow-lg border-0 h-100">
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
          className="btn btn-warning w-100 mb-2"
          onClick={() => setEditingTask(task)}
        >
          <FaEdit /> Edit
        </button>
  
        <button
          className="btn btn-danger w-100"
          onClick={deleteTask}
        >
          <FaTrash /> Delete
        </button>
  
      </div>
    </div>
  );
}

export default TaskCard;