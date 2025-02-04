// 2. Alteração de Cor de Fundo (Background Changer)

import React, { useState, useEffect } from "react";

const BackgroundChanger = () => {
  const [color, setColor] = useState("#ffffff");

  // função para retornar a cor inicial
  const Back = () => {
    const fixColor = `#ffffff`;
    setColor(fixColor);
  }  

  // Gera uma cor aleatória
  const changeColor = () => {
    const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(newColor);
  };

  // Atualiza a cor de fundo da página quando a cor muda
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
        <div class="flex flex-col gap-5 mt-5">
            <h1 class="max-md:text-3x1">2. Background color change</h1>
        </div>
        <div class="flex flex-col gap-5">
            <button onClick={changeColor}>Alter</button>
        </div>
        {/* retorna a cor inicial */}
        <button onClick={Back}>Back to color</button>
    </div>
  );
};

export default BackgroundChanger;
