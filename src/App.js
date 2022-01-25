// import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
// import { useState } from "react";

import { Header } from "./components/header/Header";
import { TaskCards } from "./components/task/TaskCards";

function App(){
  return <div className="app">
    <Header />
    <TaskCards />
  </div>
}

export default App;

// function App() {
//   const [items] = useState([{id: 1, text:"item0"}, {id: 2, text:"item1"}, {id: 3, text:"item2"},]);
//   const onDragEnd = (result) =>{
//   const remove = items.splice(result.source.index, 1)
//   items.splice(result.destination.index, 0, remove[0])
//   };
//   return(
//     <>
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId="droppable">
// {(provided)=>(
// <div {...provided.droppableProps} ref={provided.innerRef}>
//   {items.map((item, index) => (
//     <Draggable draggableId={item.text} index={index} key={item.id}>
//     {(provided) => (
// <div ref={provided.innerRef} {...provided.draggableProps}{...provided.dragHandleProps}>{item.text}</div>
//     )}
//   </Draggable>
//   ))}
//   {provided.placeholder}
// </div>
// )}
//       </Droppable>
//     </DragDropContext>
//   </>
//   );
// }


