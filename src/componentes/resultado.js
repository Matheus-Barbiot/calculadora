import React from "react";
import validar from "../funções/validar";

function Resultado(props){
    const substituir = () => {
        const resultado = validar(props.calculo)
        props.setCalc(`${resultado}`)
    }

    return (
        <>
        <div className="botao" style={{backgroundColor:'orange'}} onClick={substituir}>
            {props.sym}
        </div>
        </>
    )
}

export default Resultado