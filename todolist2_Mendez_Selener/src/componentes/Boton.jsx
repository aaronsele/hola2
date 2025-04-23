import React from "react";
import './Boton.css'

function Boton({texto, identificador}){

    return(<>
    <button className={identificador}>
        {texto}
    </button>
    </>
    )
}

export default Boton 

