import TaskCard from "./TaskCard";

function TaskList({ tasks, fetchTasks, setEditingTask }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center mt-4">
        <h5>No Tasks Found</h5>
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