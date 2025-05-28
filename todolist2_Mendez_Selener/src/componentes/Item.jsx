import React from "react";
import "./Item.css";

function Item({ tarea, eliminarTarea, marcarTarea }) {
  const fecha = new Date(tarea.id); 
  const fechaFormateada = fecha.toLocaleString(); 

  return (
    <li className="todo">
      <span style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
        {tarea.texto}
      </span>


      <div className="fecha" style={{ color: "#888" }}>
        Creada el: {fechaFormateada}
      </div>

      <div>
        <button className="marcador" onClick={() => marcarTarea(tarea.id)}>MARCAR</button>
        <button className="eliminar" onClick={() => eliminarTarea(tarea.id)}>ELIMINAR</button>
      </div>
    </li>
  );
}

export default Item;
