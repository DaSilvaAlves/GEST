import { useState } from 'react';
import { useTaskContext } from '../../App';

export default function TaskForm() {
  const { createTask } = useTaskContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'alta' | 'média' | 'baixa'>('alta');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    createTask({ title: title.trim(), description: description.trim(), priority, completed: false });
    setTitle('');
    setDescription('');
    setPriority('alta');
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Nova Tarefa</h2>
      <div className="form-group">
        <label htmlFor="title">Título *</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="O que precisas de fazer?"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Detalhes adicionais..."
          rows={3}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priority">Prioridade</label>
        <select
          id="priority"
          value={priority}
          onChange={e => setPriority(e.target.value as 'alta' | 'média' | 'baixa')}
        >
          <option value="alta">🔴 Alta</option>
          <option value="média">🟡 Média</option>
          <option value="baixa">🟢 Baixa</option>
        </select>
      </div>
      <button type="submit" className="btn-primary" disabled={!title.trim()}>
        + Criar Tarefa
      </button>
    </form>
  );
}
