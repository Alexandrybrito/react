# React + Vite
# Atividade 7 - Praticando conceitos essenciais do ReactJS

#Turma Full Stack 2 (+praTi e Codifica Edu) - 2024/2 ##Este repositório contém registros dos aprendizados em aulas, as atividades propostas e as listas de exercícios solicitadas para o 
Atividade prática do curso Fullstack do +praTi

Instruções para Configuração e Execução Local siga os passos abaixo para configurar e executar o script localmente em sua máquina:

Pré-requisitos 1.Node.js instalado: Certifique-se de que o Node.js está instalado em sua máquina. Você pode verificar se ele está instalado executando o seguinte comando no terminal:
node -v Se o Node.js não estiver não estiver instalado, você pode baixá-lo e instalá-lo Aqui
Este projeto foi desenvolvido com a biblioteca Vite do React, sendo necessário te-lo em sua maquina para rodar o projeto, assegurando os seguintes passos.

Passos para Configuração Clone o repositório: Clone este repositório em sua máquina local usando o comando: git clone https://github.com/alexandrybrito/react.git Navegue até o diretório do projeto: Acesse o diretório do repositório clonado: cd nome-do-repositorio. A abrir o projeto no Vscode, navegue até a pasta usando "cd react" - dentro da pasta, digite o comando "npm install", para adicionar todo os pacotes necessários, em seguida digite "npm run dev" para startar.

## Exercícios praticados na atividade

1. Contador Simples:
        Crie um componente de contador que exibe um número na tela e possui dois botões: “Incrementar” e “Decrementar”.
        Use o hook useState para manter o valor do contador.

2. Alteração de Cor de Fundo:
        Crie um componente onde o fundo da página muda de cor cada vez que o usuário clica em um botão.
        Use useState para armazenar a cor atual e useEffect para atualizar o estilo do fundo com cada mudança.

3. Lista de Tarefas:
        Crie um aplicativo de lista de tarefas (to-do list) onde o usuário pode adicionar e remover tarefas. Use useState para armazenar a lista de tarefas e 
        renderize cada tarefa como um item de lista. Desafio: permita que o usuário marque as tarefas como concluídas e filtre para ver apenas as tarefas pendentes.

4. Temporizador com useEffect:
        Crie um temporizador que conta o tempo em segundos e exiba na tela.
        Use useEffect para iniciar o temporizador ao carregar o componente e useState para atualizar o tempo.

5. Filtro de Lista:
        Crie um componente que renderiza uma lista de nomes. Adicione um campo de entrada para filtrar os nomes com base no texto digitado.
        Use useState para controlar o valor do filtro e map para exibir apenas os itens que correspondem ao filtro.

6. Formulário de Registro Simples:
        Crie um formulário com campos de nome, e-mail e senha. Ao enviar o formulário, exiba uma mensagem de boas-vindas usando as informações digitadas.
        Use useState para armazenar os valores dos campos e exiba a mensagem em um novo componente de boas-vindas.

7. Aplicação de Requisição de Dados Simples:
        Crie um componente que exiba uma lista de posts obtidos de uma API pública (como JSONPlaceholder).
        Use useEffect para fazer a requisição ao carregar o componente e exiba os posts em uma lista.

8. Galeria de Imagens com Visualização Detalhada:
        Crie uma galeria simples com uma lista de imagens. Quando o usuário clica em uma imagem, exiba-a em uma visualização ampliada em um modal.
        Use useState para armazenar a imagem selecionada e renderize o modal condicionalmente.

9. Timer com Intervalo e Alerta:
        Crie um timer onde o usuário define a quantidade de segundos para a contagem regressiva e, ao iniciar, o tempo é exibido e diminui a cada segundo.
        Use useState para armazenar o tempo e useEffect para iniciar a contagem regressiva ao iniciar o timer. Ao chegar a zero, exiba um alerta informando que o tempo acabou.

10. Componentes com Tabs Navegáveis:
        Crie uma interface de “tabs” (abas) onde cada aba exibe um conteúdo diferente ao ser clicada (por exemplo, uma aba “Sobre” e uma aba “Contato”).
        Use useState para controlar qual aba está ativa e renderize o conteúdo de acordo com a aba selecionada.
