// 10. Componentes com Tabs Navegáveis (Tabs.jsx)

import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('sobre');
  //Define um estado chamado activeTab para controlar a aba ativa.

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab('sobre')} className={activeTab === 'sobre' ?
 'active' : ''}>Sobre</button>
        <button onClick={() => setActiveTab('contato')} className={activeTab === 'contato' ?
 'active' : ''}>Contato</button>
      </div>
      {/* Quando o botão "Sobre" é clicado, a função setActiveTab é chamada com o argumento 'sobre', definindo a aba ativa. */}

Quando o botão "Contato" é clicado, a função setActiveTab é chamada com o argumento 'contato', definindo a aba ativa.
      <div className="content">
        {activeTab === 'sobre' && <div><h2>Sobre</h2>
        <p>Explorar e praticar os conceitos essenciais do ReactJS é fundamental para qualquer desenvolvedor web moderno. ReactJS, uma biblioteca JavaScript poderosa para construção de interfaces de usuário, permite criar aplicações web dinâmicas e reativas. Entre os conceitos chave a serem praticados estão os componentes, estado e propriedades.</p>
        <p>Componentes são blocos de construção reutilizáveis que formam a base de uma aplicação React. Criar e aninhar componentes permite organizar e modularizar o código, tornando-o mais fácil de manter e entender. O estado, outro conceito fundamental, representa os dados internos de um componente e é responsável por definir o comportamento dinâmico da interface. Praticar a gestão do estado, utilizando useState e useReducer, é essencial para criar aplicações interativas.</p>
        <p>Bibliotecas como Redux e Context API são ferramentas poderosas para compartilhar estado entre múltiplos componentes em uma aplicação. O Redux, por exemplo, segue um padrão de fluxo de dados unidirecional e centraliza o estado da aplicação em um único local, conhecido como store. Praticar a configuração e uso do Redux, incluindo ações, reducers e middleware, pode ser desafiador, mas extremamente benéfico.</p>
        <p>Outra prática recomendada é a utilização de componentes funcionais ao invés de componentes baseados em classe. Com a introdução dos hooks, componentes funcionais se tornaram o padrão preferido devido à sua simplicidade e legibilidade. Além disso, componentes funcionais tendem a ser mais fáceis de testar e depurar.</p>

        <p>Explorar o React Router também é crucial para a criação de aplicações de página única (SPA - Single Page Applications). O React Router permite a navegação entre diferentes componentes ou "páginas" sem recarregar a página inteira, proporcionando uma experiência mais fluida para o usuário. Praticar a configuração de rotas, links e parâmetros de URL ajuda a entender como gerenciar a navegação na aplicação.</p>

</div>}
        {activeTab === 'contato' && <div><h2>Contato</h2>
        
        <p>Contato para Finais do Projeto ReactJS</p>
        <p>Agradecemos por confiar em nossos serviços para a execução deste projeto em ReactJS. Esperamos que tenha ficado satisfeito com os resultados e que a aplicação esteja atendendo às suas expectativas.</p>
        <p>Para quaisquer dúvidas, suporte adicional ou discussões sobre futuros projetos, por favor, não hesite em nos contatar através dos canais abaixo:

Contato Principal:

Nome: Alexandry Silva

Cargo: Gerente de Projetos

Email: alexy.silva@consultec.com

Telefone: (11) 1234-5678

Suporte Técnico:

Nome: Maria Fernandes

Cargo: Desenvolvedora Front-end

Email: maria.fernandes@consultec.com

Telefone: (11) 2345-6789</p>
<p>
Endereço da Empresa:

Nome da Empresa: Consultec Systems Ltda.

Endereço: Rua das Flores, 123, Centro, São Paulo, SP, 01000-000

Estamos ansiosos para colaborar novamente no futuro e continuar proporcionando soluções inovadoras e eficientes. Agradecemos imensamente pela parceria e confiança em nosso trabalho.

Atenciosamente,

Equipe Consultec Systems Ltda.</p>
        </div>}
      </div>
    </div>
  );
};

export default Tabs;