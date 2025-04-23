import React from "react";
import './Item.css'
import Boton from "./boton";


function Item({nombre}){
return(<>

<p> {nombre}. Creado:   </p>

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