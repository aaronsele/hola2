import React from "react";
import './Form.css'
import Boton from "./boton";

function Form(){
return(<>
<input type="text" id="inpuTarea" placeholder="Añadir nueva tarea"></input>
<Boton
texto="Agregar"
identificador="agregar"
/>
</>
)

}

export default Form