import PropTypes from "prop-types";
import { TaskItem } from "./TaskItem";

export function TaskList({ tasks, onTaskUpdated, onTaskDeleted }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskUpdated={onTaskUpdated}
          onTaskDeleted={onTaskDeleted}
        />
      ))}
    </ul>
  );
}

TaskList.propTypes = {
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
};
