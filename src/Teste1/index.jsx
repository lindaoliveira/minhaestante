import React, { useState } from "react";
import Teste1 from './Teste1.css'


function TesteModo(){

    const [classe, setClasse] = useState ('light');

    function handleClickDarkMode (){
        if (classe ===  "dark")
            setClasse ("light")
        else
            setClasse ("dark")
    }

    return(
        <div className={classe}>
            <button onClick={handleClickDarkMode}>Dark Mode</button>
        </div>
    );
}

export default TesteModo;