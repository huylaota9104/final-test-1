
import React, { useState, useEffect } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const TodoList = ({ storedTasks }) => {
  const [showOnlyUnfinished, setShowOnlyUnfinished] = useState(false);
  const [tasks, setTasks] = useState(storedTasks);
  const [currentLanguage, setCurrentLanguage] = useState("en");

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

  const toggleLanguage = () => {
    setCurrentLanguage((prevLanguage) => (prevLanguage === "en" ? "vn" : "en"));
  };

  const getContent = (content) => {
    return currentLanguage === "en" ? content.en : content.vn;
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const updatedTasks = [...tasks];
    const [reorderedItem] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, reorderedItem);
    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="todo-list-container"
          >
            {tasks
              .filter((task) => (showOnlyUnfinished ? !task.done : true))
              .map((task, index) => (
                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`todo-item-container ${task.done ? "done" : ""}`}
                    >
                      {/* rest of your component JSX */}
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
