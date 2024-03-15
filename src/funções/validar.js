function validar(calc, num=0) {
    try {
        // Tente avaliar o cálculo
        let calac = calc
        calac = calac.replace('x', '*')
        calac = calac.replace('÷', '/')
        console.log(calac)
        let resultado = eval(calac);

        if (typeof resultado === 'number' && !isNaN(resultado)) {
            // Se for um número válido, retorne o resultado
            return resultado;
        } else {
            // Se não for um número válido, retorne uma mensagem de erro
            return '0'
        }
    } catch (error) {
        // Se ocorrer um erro ao avaliar o cálculo, retorne uma mensagem de erro
        return '0'
    }
}

export default validar