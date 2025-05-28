import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./componentes/form";
import Lista from "./componentes/lista";
import Boton from "./componentes/boton";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tareaRapida, setTareaRapida] = useState(null);
  const [filtro, setFiltro] = useState("todas"); 

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
      creada: Date.now(), 
      tiempo: null 
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const marcarTarea = (id) => {
    setTareas(tareas.map(tarea => {
      if (tarea.id === id) {
        const nuevaCompletada = !tarea.completada;

        if (nuevaCompletada && tarea.tiempo === null) {
          const tiempoReal = Math.floor((Date.now() - tarea.creada) / 1000); 
          return { ...tarea, completada: true, tiempo: tiempoReal };
        }

        return { ...tarea, completada: nuevaCompletada };
      }
      return tarea;
    }));
  };

  const eliminarCompletadas = () => {
    setTareas(tareas.filter(t => !t.completada));
  };

  const tareaMasRapida = () => {
    const tareasCompletadas = tareas.filter(t => t.completada && t.tiempo !== null);

    if (tareasCompletadas.length === 0) {
      setTareaRapida(null);
      return;
    }

    const tareaConMenorTiempo = tareasCompletadas.reduce((masRapida, actual) =>
      actual.tiempo < masRapida.tiempo ? actual : masRapida
    );

    setTareaRapida(tareaConMenorTiempo);
  };

  const tareasFiltradas = tareas.filter(tarea => {
    if (filtro === "completadas") return tarea.completada;
    if (filtro === "incompletas") return !tarea.completada;
    return true; 
  });

  return (
    <>
      <h1>Lista de tareas</h1>
      <Form agregarTarea={agregarTarea} />

      
      <div style={{ margin: "10px 0" }}>
        <button onClick={() => setFiltro("todas")} style={{ fontWeight: filtro === "todas" ? "bold" : "normal" }}>Todas</button>
        <button onClick={() => setFiltro("completadas")} style={{ fontWeight: filtro === "completadas" ? "bold" : "normal" }}>Completadas</button>
        <button onClick={() => setFiltro("incompletas")} style={{ fontWeight: filtro === "incompletas" ? "bold" : "normal" }}>Incompletas</button>
      </div>

      <Lista tareas={tareasFiltradas} eliminarTarea={eliminarTarea} marcarTarea={marcarTarea} />

      <Boton texto="Eliminar tareas completadas" onClick={eliminarCompletadas} />
      <Boton texto="Ver tarea más rápida" onClick={tareaMasRapida} />

      {tareaRapida && (
        <p style={{ marginTop: '20px', color: 'green', fontWeight: 'bold' }}>
          La tarea completada más rápida es: "{tareaRapida.texto}" en {tareaRapida.tiempo} segundos
        </p>
      )}
    </>
  );
}

export default App;
