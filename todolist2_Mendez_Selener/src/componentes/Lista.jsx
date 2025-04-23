import React from "react";
import Boton from './boton'
import Item from './item.jsx'
import './Lista.css'

function Lista(){
return(<>
<Item
nombre="aaron"
fecha="22/4/2025"
hora="10:02"
/>

<Item
nombre ="tareas"
fecha="23/4/2025"
hora="9:15"/>

</>
)
}

export default Lista