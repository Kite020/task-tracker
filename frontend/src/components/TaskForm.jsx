import { useState, useEffect } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function TaskForm({ fetchTasks, editingTask, setEditingTask }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
    dueDate: "",
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
        status: editingTask.status,
        dueDate: editingTask.dueDate
          ? editingTask.dueDate.split("T")[0]
          : "",
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error("Task title is required");
      return;
    }

    try {
      if (editingTask) {
        await API.put(`/${editingTask._id}`, formData);
        toast.success("Task updated successfully");
        setEditingTask(null);
      } else {
        await API.post("/", formData);
        toast.success("Task added successfully");
      }

      setFormData({
        title: "",
        description: "",
        status: "Pending",
        dueDate: "",
      });

      fetchTasks();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <form className="card shadow-lg p-4 mb-5" onSubmit={handleSubmit}>
      <h4 className="mb-3">
        {editingTask ? "Edit Task" : "Add New Task"}
      </h4>

      <input
        className="form-control mb-3"
        type="text"
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-3"
        name="description"
        placeholder="Description"
        rows="3"
        value={formData.description}
        onChange={handleChange}
      />

      <select
        className="form-select mb-3"
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <input
        className="form-control mb-3"
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
      />

      <button className="btn btn-primary">
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;