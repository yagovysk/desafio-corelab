import PropTypes from "prop-types";
import { useState } from "react";
import api from "../../services/api";
import "./Task.css";

export function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { title, description };

    api
      .post("/tasks", newTask)
      .then((response) => {
        onTaskAdded(response.data);
        setTitle("");
        setDescription("");
        setSuccessMessage("Tarefa adicionada com sucesso!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}{" "}
      {/* Exibe a mensagem de sucesso */}
    </div>
  );
}

TaskForm.propTypes = {
  onTaskAdded: PropTypes.func.isRequired,
};
