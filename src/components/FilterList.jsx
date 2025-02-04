// 5. Filtro de Lista (FilterList)

import React, { useState } from 'react';

const FilterList = () => {
  const [filter, setFilter] = useState('');
  const names = ['Alice', 'Alexandry', 'Beatriz', 'Carlos', 'Daiane', 'Eduardo', 'Paula', 'Sebastião', 'Vitor', 'Zuleica', 'Fabiano', 'Ubirajara'];
   // Define um estado 'filter' com valor inicial vazio e a função 'setFilter' para atualizá-lo.
  // Define um array 'names' com uma lista de nomes.

  const filteredNames = names.filter(name => name.toLowerCase().includes(filter.toLowerCase()));
 // garante que a filtragem não seja sensível a maiúsculas e minúsculas.

  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <div class="flex flex-col gap-5 mt-5">
        <h1 class="max-md:text-3x1">5 . Filter List</h1>
      </div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Digite parte do nome" />
      <ul className='filter-ul'>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
  // Um campo de entrada (input) onde o valor é controlado pelo estado 'filter'.
  // O evento 'onChange' atualiza o estado 'filter' com o valor digitado no campo de entrada.

export default FilterList;