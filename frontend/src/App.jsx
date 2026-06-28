import { useEffect, useState } from "react";
import API from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      setLoading(true);
  
      const res = await API.get("/");
      setTasks(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadTasks = async () => {
      await fetchTasks();
    };
  
    loadTasks();
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">

        <h1 className="display-4 fw-bold text-primary">📋 Task Tracker</h1>

        <p className="text-muted">
            Organize your work efficiently
        </p>

      </div>

      <TaskForm
        fetchTasks={fetchTasks}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 mx-auto">
          <select
            className="form-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <select
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>

          <p className="mt-3">Loading Tasks...</p>
        </div>
      ) : (
        <TaskList
          tasks={tasks
            .filter((task) =>
              task.title.toLowerCase().includes(search.toLowerCase())
            )
            .filter((task) =>
              filter === "All" ? true : task.status === filter
            )
            .sort((a, b) =>
              sortOrder === "Newest"
                ? new Date(b.createdAt) - new Date(a.createdAt)
                : new Date(a.createdAt) - new Date(b.createdAt)
            )}
          fetchTasks={fetchTasks}
          setEditingTask={setEditingTask}
        />
      )}

      <footer className="text-center mt-5 text-muted">

        <hr />

        <p>
            Built using React • Express • MongoDB • Node.js
        </p>

      </footer>


      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;