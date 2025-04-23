import React from "react";
// import './Item.css'
import Boton from "./boton";


function Item({nombre, fecha, hora}){
return(<>

<p> {nombre}. Creado: {fecha}, {hora}</p>

<Boton
texto="Marcar"
identificador="marcador"
/>

<Boton
texto="Eliminar"
identificador="eliminar"
/>

</>
)

}

export default Item