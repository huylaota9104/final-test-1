
import React, { useState, useEffect } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = ({ storedTasks }) => {
  const [showOnlyUnfinished, setShowOnlyUnfinished] = useState(false);
  const [tasks, setTasks] = useState(storedTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTaskStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const calculateDaysUntilDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDifference = due.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  };

  return (
    <div className="todo-list-container">
      {tasks
        .filter((task) => (showOnlyUnfinished ? !task.done : true))
        .map((task) => (
          <div
            key={task.id}
            className={`todo-item-container ${task.done ? "done" : ""}`}
          >
            {task.done ? (
              <FaRegCheckCircle
                className="item-done-button"
                color="#9a9a9a"
                onClick={() => toggleTaskStatus(task.id)}
              />
            ) : (
              <FaRegCircle
                className="item-done-button"
                color="#9a9a9a"
                onClick={() => toggleTaskStatus(task.id)}
              />
            )}
            <div className="item-title">{task.title}</div>
            {task.dueDate && (
              <div className="item-due-date">
                Due in {calculateDaysUntilDue(task.dueDate)} days
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default TodoList;
