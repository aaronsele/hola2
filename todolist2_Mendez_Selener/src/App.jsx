import React from "react";
import './App.css'
import Form from "./componentes/form";
import Lista from "./componentes/lista";
import Boton from "./componentes/boton";

function App() {


  return (<>
<h1>Lista de tareas</h1>

<Form/>

<Lista/>

<Boton
texto="Eliminar tareas completadas"
identificador="eliminarCompletadas"
/>

<Boton
texto="Ver tarea más rápida"
identificador="tareaMasRapida"
/>

  </>
  )
}

export default App
