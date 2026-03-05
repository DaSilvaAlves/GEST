import React, { useState } from 'react';
import { Task } from '../types/index';
import { Button } from '../components/Button';

const Feature1 = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] =('');
  const [priority, setPriority] = useState('alta');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const task: Task = {
      id: Date.now(),
      title,
      description,
      priority,
      completed: false,
    };
    // Create task logic
    console.log(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input type="text" value={title} onChangeevent) => setTitle(event.target.value)} />
      </label>
      <label>
        Descrição:
        <textarea valuedescription} onChange={(event) => setDescription(event.target.value)}      </label>
      <label>
        Prioridade:
        < value={priority} onChange={(event) => setPriority(event.target.value)}>
          <option value="alta">Alta</option>
          <option value="média">Média</option>
          <option value="baixa">Baixa</option>
        </select>
      </label>
      <Button type="submit">Criar Tarefa</Button>
    </form>
  );
};

export default Feature1;