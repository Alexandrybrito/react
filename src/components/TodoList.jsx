// 3. Lista de Tarefas (TodoList.jsx)


import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('all');

  // Adiciona uma nova tarefa
  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  // Remove uma tarefa
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // Marca uma tarefa como concluída
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Filtra as tarefas com base no filtro selecionado
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className='todolist'>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Adicionar Tarefa" />
      <button onClick={addTask}>Adicionar</button>
      <div className='btn-consulta'>
        <button onClick={() => setFilter('all')}>Todas</button>
        {/* Filtro para mostrar todas as tarefas. */}
        <button onClick={() => setFilter('completed')}>Concluídas</button>
        {/* Filtro para mostrar apenas as tarefas concluídas. */}
        <button onClick={() => setFilter('pending')}>Pendentes</button>
        {/* Filtro para mostrar apenas as tarefas pendentes. */}
      </div>
      <ul className='btn-final'>
        {filteredTasks.map((t, index) => (
          <li key={index} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
            {t.text}
            <button onClick={() => toggleComplete(index)}>Concluir</button>
            {/* Se a tarefa estiver concluída, aplica um risco no texto */}
            <button onClick={() => removeTask(index)}>Remover</button>
            {/* remove a tarefa da lista */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;