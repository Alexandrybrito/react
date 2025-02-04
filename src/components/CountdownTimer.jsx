// 9. Timer com Intervalo e Alerta (CountdownTimer.jsx)

import React, { useState, useEffect } from 'react';

// Define dois estados: time inicializado com 0 e isActive com false.
const CountdownTimer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  
  // Inicia e pausa o temporizador
  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      if (isActive) alert("Tempo acabou!");
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  // useEffect é usado para iniciar e parar o temporizador com base nos estados isActive e time.
  // Se isActive for true e time for maior que 0, ele cria um intervalo que decrementa o tempo a cada segundo.
  // Se o tempo chegar a 0, o intervalo é limpo e, se isActive for true, um alerta é exibido.

  const reset = () => {
    setTime(0);
    setIsActive(false);
  };

  return (
    <div className='cdTimer'>
      <input 
        type="number" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        placeholder="Set Time (seconds)" 
      />
      <h1>Tempo: {time}s</h1>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Pausar' : 'Iniciar'}
      </button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
};

 // O retorno renderiza uma interface com um input para definir o tempo, que exibe o tempo restante e dois botões.
  // O input permite ao usuário definir o tempo em segundos.
  // Um botão alterna o estado isActive entre true e false, iniciando ou pausando o temporizador.
  // Outro botão chama a função reset para reiniciar o temporizador.

export default CountdownTimer;
