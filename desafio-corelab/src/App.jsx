import { useState, useEffect } from "react";
import api from "./services/api";
import { TaskList } from "./List-components/components/TaskList";
import { TaskForm } from "./List-components/components/TaskForm";
import "./App.css";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(false); // Novo estado para controlar a exibição das tarefas

  useEffect(() => {
    if (showTasks) {
      api
        .get("/tasks")
        .then((response) => {
          setTasks(response.data);
        })
        .catch((error) => {
          console.error("Error fetching tasks:", error);
        });
    }
  }, [showTasks]);

  const handleTaskUpdated = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleTaskDeleted = (deletedTaskId) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== deletedTaskId)
    );
  };

  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleShowTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div className="container-list">
      <h1>Lista de tarefas</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <button onClick={toggleShowTasks}>
        {showTasks ? "Esconder Tarefas" : "Mostrar Tarefas"}
      </button>
      {showTasks && (
        <TaskList
          tasks={tasks}
          onTaskUpdated={handleTaskUpdated}
          onTaskDeleted={handleTaskDeleted}
        />
      )}
    </div>
  );
}
