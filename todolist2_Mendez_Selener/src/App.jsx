import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./componentes/form";
import Lista from "./componentes/lista";
import Boton from "./componentes/boton";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tareaRapida, setTareaRapida] = useState(null); 

  useEffect(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    if (tareasGuardadas) {
      setTareas(JSON.parse(tareasGuardadas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
      completada: false,
      tiempo: Math.floor(Math.random() * 100) + 1 // tiempo en minutos
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const marcarTarea = (id) => {
    setTareas(tareas.map(tarea => 
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  const eliminarCompletadas = () => {
    setTareas(tareas.filter(t => !t.completada));
  };

  const tareaMasRapida = () => {
    const tareasCompletadas = tareas.filter(t => t.completada);

    if (tareasCompletadas.length === 0) {
      setTareaRapida(null); 
      return;
    }

    const tareaConMenorTiempo = tareasCompletadas.reduce((masRapida, actual) =>
      actual.tiempo < masRapida.tiempo ? actual : masRapida
    );

    setTareaRapida(tareaConMenorTiempo);
  };

  return (
    <>
      <h1>Lista de tareas</h1>
      <Form agregarTarea={agregarTarea} />
      <Lista tareas={tareas} eliminarTarea={eliminarTarea} marcarTarea={marcarTarea} />
      <Boton texto="Eliminar tareas completadas" onClick={eliminarCompletadas} />
      <Boton texto="Ver tarea más rápida" onClick={tareaMasRapida} />

      
      {tareaRapida && (
        <p style={{ marginTop: '20px', color: 'green', fontWeight: 'bold' }}>
          La tarea completada más rápida es: "{tareaRapida.texto}" con {tareaRapida.tiempo * 60} segundos
        </p>
      )}
    </>
  );
}

export default App;
