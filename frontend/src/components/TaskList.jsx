import TaskCard from "./TaskCard";

function TaskList({ tasks, fetchTasks, setEditingTask }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center mt-4">
        <div className="text-center py-5">

          <h2>📋</h2>

          <h4>No Tasks Yet</h4>

          <p className="text-muted">
              Create your first task to get started!
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="row">
      {tasks.map((task) => (
        <div className="col-md-6 col-lg-4 mb-4" key={task._id}>
          <TaskCard
            task={task}
            fetchTasks={fetchTasks}
            setEditingTask={setEditingTask}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskList;