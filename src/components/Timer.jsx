// 4. Temporizador com useEffect (Timer.jsx)

import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Define dois estados: 'seconds' para armazenar o tempo em segundos e 'isActive' para indicar se o temporizador está ativo ou não.
  // 'useState' inicializa 'seconds' com 0 e 'isActive' com false.

  // Inicia e pausa o temporizador
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);


  // Se 'isActive' for true, cria um intervalo que incrementa 'seconds' a cada 1 segundo.
  // Se 'isActive' for false e 'seconds' for diferente de 0, limpa o intervalo.
  // A função de retorno limpa o intervalo quando o componente é desmontado ou quando 'isActive' ou 'seconds' são atualizados.

  // Reinicia o temporizador
  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div style={{ textAlign: "center", margin: "100px" }}>
      <h1 class="max-md:text-3x1">4. Timer</h1>
      <h2>Iong: {seconds}s</h2>
      <div class="button-group" style={{margin:"20px"}}>
        <button onClick={() => setIsActive(!isActive)} style={{marginRight:"10px"}}>
            {isActive ? 'Pausar' : 'Iniciar'} 
        </button>
        <button onClick={reset}>Restart</button>
      </div>
    </div>
  );
};

// Um botão alterna o estado 'isActive' entre true e false, iniciando ou pausando o temporizador. O texto do botão muda entre 'Pausar' e 'Iniciar' com base no estado 'isActive'.
// O segundo botão chama a função 'reset' para reiniciar o temporizador.

export default Timer;
