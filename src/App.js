import React, {useState} from 'react';
import Botao from './componentes/botao';

import './App.css';

function App() {
  const [calculo, setCalc] = useState('')
  return (
    <>
    <main>
      <div id='display'>
        <p>{calculo}</p>
      </div>
      <div id='botoes'>
        <div id='teclado'>
          <Botao sym='1' value='1' calculo={calculo} setCalc={setCalc}/>
          <Botao sym='2' value='2' calculo={calculo} setCalc={setCalc}/>
          <Botao sym='3' value='3' calculo={calculo} setCalc={setCalc}/>
          <Botao sym='4' value='4' calculo={calculo} setCalc={setCalc}/>
          <Botao sym='5' value='5' calculo={calculo} setCalc={setCalc}/>
          <Botao sym='6' value='6' calculo={calculo} setCalc={setCalc}/>
          <Botao sym='7' value='7' calculo={calculo} setCalc={setCalc}/>
          <Botao sym='8' value='8' calculo={calculo} setCalc={setCalc}/>
          <Botao sym='9' value='9' calculo={calculo} setCalc={setCalc}/>
          <Botao sym='0' value='0' calculo={calculo} setCalc={setCalc}/>
        </div>
        <div id='operacoes'>
          <Botao sym='+' value='+' calculo={calculo} setCalc={setCalc}/>
          <Botao sym='-' value='-' calculo={calculo} setCalc={setCalc}/>
          <Botao sym='x' value='*' calculo={calculo} setCalc={setCalc}/>
          <Botao sym='%' value='/' calculo={calculo} setCalc={setCalc}/>
        </div>
      </div>
    </main>
    </>
  );
}

export default App;
