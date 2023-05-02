import React from "react";
import Css from './Lidos.css'

function Lidos (props){
    return (
        <div>
            <h2>{props.numero}</h2>
            <h2>{props.leituras}</h2>
        </div>
    )
}

export default Lidos;