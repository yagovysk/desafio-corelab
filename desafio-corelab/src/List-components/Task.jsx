import PropTypes from "prop-types";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

export function Task({ tasks, onTaskUpdated, onTaskDeleted, onTaskAdded }) {
  return (
    <div>
      <TaskForm onTaskAdded={onTaskAdded} />
      <TaskList
        tasks={tasks}
        onTaskUpdated={onTaskUpdated}
        onTaskDeleted={onTaskDeleted}
      />
    </div>
  );
}

Task.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTaskUpdated: PropTypes.func.isRequired,
  onTaskDeleted: PropTypes.func.isRequired,
  onTaskAdded: PropTypes.func.isRequired,
};
