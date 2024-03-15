import React from "react";

function Apagar(props){
    const apagar = () => {
        const apagado = props.calculo.slice(0, -1)
        if(props.calculo == '' || apagado == '') {
            props.setCalc('0')
        } else {
            props.setCalc(apagado)
        }
        
    }
    

    return (
        <>
        <div className="botao" style={{backgroundColor:'orange'}} onClick={apagar}>
            {props.sym}
        </div>
        </>
    )
}

export default Apagar 