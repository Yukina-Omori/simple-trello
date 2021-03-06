import React, { useState } from "react";
import { TaskCard } from "./TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: "0",
      draggableId: "item0",
    },
  ]);

  const handleDragEnd = (result) =>{
    const remove = taskCardsList.splice(result.source.index, 1);
    taskCardsList.splice(result.destination.index, 0, remove[0]);
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}> 
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
    <div className="taskCardArea" {...provided.droppableProps} ref={provided.innerRef}>
      {taskCardsList.map((taskCard, index) => (
        <TaskCard key={taskCard.id} index={index} taskCardsList={taskCardsList} 
        setTaskCardsList={setTaskCardsList} taskCard={taskCard} />
      ))}
      {provided.placeholder}
      <AddTaskCardButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
       )}
    </Droppable>
    </DragDropContext>
  );
};
