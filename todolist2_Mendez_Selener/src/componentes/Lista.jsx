import React from "react";
import Item from "./item";
import "./Lista.css";

function Lista({ tareas, eliminarTarea, marcarTarea }) {
  return (
    <ul className="lista">
      {tareas.map((tarea) => (
        <Item
          key={tarea.id}
          tarea={tarea}
          eliminarTarea={eliminarTarea}
          marcarTarea={marcarTarea}
        />
      ))}
    </ul>
  );
}

export default Lista;
