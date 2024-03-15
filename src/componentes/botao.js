import React from "react";

function Botao(props){
    //Ele vai receber 2 props: numero ou simbolo que será adicionado ao string que contém o calculo, e SetCalc para adcionar o valor no calculo.

    const addToCalc = () => {
        if(props.calculo == '0') {
            props.setCalc(props.value)
        } else {
            props.setCalc(props.calculo + props.value)
        }
        
    }
    return (
        <>
        <div className="botao" onClick={addToCalc}>
            {props.sym}
        </div>
        </>
    )
}

export default Botao