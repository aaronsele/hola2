import React from "react";
import "./Item.css";

function Item({ tarea, eliminarTarea, marcarTarea }) {
  return (
    <li className="todo">
      <span style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
        {tarea.texto}
      </span>
      <div>
        <button className="marcador" onClick={() => marcarTarea(tarea.id)}>COMPLETADA</button>
        <button className="eliminar" onClick={() => eliminarTarea(tarea.id)}>ELIMINAR</button>
      </div>
    </li>
  );
}

export default Item;
