// 6. Formulário de Registro Simples (RegistrationForm)

import React, { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  // Define quatro estados: 'name' (nome), 'email', 'password' (senha) e 'message' (mensagem).
  // Cada estado tem uma função de atualização correspondente (setName, setEmail, setPassword, setMessage).
  // Todos os estados são inicializados com strings vazias.

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      setMessage(`Bem-vindo, ${name}, seus dados foram registrados com sucesso!`);
    } else {
      setMessage('Por favor, preencha todos os campos.');
    }
  };
  // A função 'handleSubmit' é chamada quando o formulário é enviado (submit).
  // 'e.preventDefault()' evita o comportamento padrão de envio do formulário, que recarregaria a página.
  // Se 'name', 'email' e 'password' estiverem preenchidos, uma mensagem de boas-vindas é definida em 'message'.
  // Caso contrário, uma mensagem solicitando o preenchimento de todos os campos é definida em 'message'.

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
        <div class="flex flex-col gap-5 mt-5">
            <h1 class="max-md:text-3x1">6. Registration Form</h1>
        </div>
        <div class="flex flex-col gap-5" >
            <form onSubmit={handleSubmit} >
                <div>
                    <input value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Nome" required style={{marginBottom:"10px"}} />
                </div>
                <div>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required style={{marginBottom:"10px"}} />
                </div>
                <div>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" required style={{marginBottom:"10px"}} />
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
      {message && <p>{message}</p>}
    </div>
  );
};
// O retorno do componente renderiza a interface do formulário de registro:

export default RegistrationForm;