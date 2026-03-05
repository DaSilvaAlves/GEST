import React, { useState } from 'react';
import { Task } from '../types/index';
import { Button } from '../components/ui/Button';

const Feature2 = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('alta');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const task: Task = {
      id,
      title,
      description,
      priority,
      completed: false,
    };
    // Update task logic
    console.log(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input="number" value={id} onChange={(event) => setId(Number(event.target.value))} />
      </label>
      <label>
        Título:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label>
        Descrição:
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <label>
        Prioridade:
        <select value={priority} onChange={(event) => setPriority(event.target.value)}>
          <option value="alta">Alta</option>
          <option value="média">Média</option>
          <option value="baixa">Baixa</option>
        </select>
      </label>
      <Button type="submit">Atualizar Tarefa</Button>
    </form>
  );
};

export default Feature2;