import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./componentes/form";
import Lista from "./componentes/lista";
import Boton from "./componentes/boton";

function App() {
  const [tareas, setTareas] = useState([]);

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
      tiempo: Math.floor(Math.random() * 100) + 1 // tiempo 
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
    const tareasCompletadas = tareas.filter(tarea => tarea.completada);
    
    if (tareasCompletadas.length === 0) {
      alert("No hay tareas completadas todavía.");
      return;
    }
  
    const tareaConMenorTiempo = tareasCompletadas.reduce((tareaMasRapidaHastaAhora, tareaActual) => {
      return tareaActual.tiempo < tareaMasRapidaHastaAhora.tiempo
        ? tareaActual
        : tareaMasRapidaHastaAhora;
    });
  
    alert(`La tarea completada más rápida es: "${tareaConMenorTiempo.texto}" con ${tareaConMenorTiempo.tiempo} minutos`);
  };
  
  return (
    <>
      <h1>Lista de tareas</h1>
      <Form agregarTarea={agregarTarea} />
      <Lista tareas={tareas} eliminarTarea={eliminarTarea} marcarTarea={marcarTarea} />
      <Boton texto="Eliminar tareas completadas" onClick={eliminarCompletadas} />
      <Boton texto="Ver tarea más rápida" onClick={tareaMasRapida} />
    </>
  );
}

export default App;
