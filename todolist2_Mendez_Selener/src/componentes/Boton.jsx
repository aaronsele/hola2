import React from "react";
import "./Boton.css";

function Boton({ texto, tipo = "agregar", onClick }) {
  return (
    <button className={tipo} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Boton;
