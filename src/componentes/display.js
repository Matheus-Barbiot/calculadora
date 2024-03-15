import React from "react";
import validar from "../funções/validar";

function Display(props) {
    // Mostra o cálculo e o resultado, transferindo o sistema matemático do JavaScript para o natural
    
    return (
        <>
            <div id='display'>
                <p>{props.calculo}</p>
                <p id="res">{validar(props.calculo, props.calculo)}</p>
            </div>
        </>
    );
}


export default Display