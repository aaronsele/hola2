import React, { useState } from "react";
import "./Form.css";

function Form({ agregarTarea }) {
  const [input, setInput] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      agregarTarea(input);
      setInput("");
    }
  };

  return (
    <form className="formulario" onSubmit={manejarSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Escribí una tarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="agregar" type="submit">Agregar</button>
    </form>
  );
}

export default Form;
