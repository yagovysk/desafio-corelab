import PropTypes from "prop-types";
import api from "../../services/api";

export function TaskItem({ task, onTaskUpdated, onTaskDeleted }) {
  const handleDelete = () => {
    api
      .delete(`/tasks/${task.id}`)
      .then(() => {
        onTaskDeleted(task.id);
      })
      .catch((error) => {
        console.error("Erro ao deletar tarefa:", error);
      });
  };

  const handleToggleComplete = () => {
    const updatedTask = { ...task, completed: !task.completed };

    api
      .put(`/tasks/${task.id}`, updatedTask)
      .then((response) => {
        onTaskUpdated(response.data);
      })
      .catch((error) => {
        console.error("Erro ao atualizar tarefa:", error);
      });
  };

  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.title}
      </span>
      <button onClick={handleToggleComplete}>
        {task.completed ? "Desmarcar" : "Completar"}
      </button>
      <button onClick={handleDelete}>Excluir</button>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onTaskUpdated: PropTypes.func.isRequired,
  onTaskDeleted: PropTypes.func.isRequired,
};
