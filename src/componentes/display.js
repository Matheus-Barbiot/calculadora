import React from "react";

function Display(props) {
    // Mostra o cálculo e o resultado, transferindo o sistema matemático do JavaScript para o natural.
    function validar(calc) {
        try {
            // Tente avaliar o cálculo
            let resultado = eval(calc);
            
            // Verifique se o resultado é um número
            if (typeof resultado === 'number' && !isNaN(resultado)) {
                // Se for um número válido, retorne o resultado
                return resultado;
            } else {
                // Se não for um número válido, retorne uma mensagem de erro
                return
            }
        } catch (error) {
            // Se ocorrer um erro ao avaliar o cálculo, retorne uma mensagem de erro
            return
        }
    }
    
    return (
        <>
            <div id='display'>
                <p>{props.calculo}</p>
                <p>{validar(props.calculo)}</p>
            </div>
        </>
    );
}


export default Display