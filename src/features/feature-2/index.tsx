import { useState } from 'react';
import { useTaskContext } from '../../App';
import type { Task } from '../../types/index';

const PRIORITY_LABELS = { alta: '🔴 Alta', média: '🟡 Média', baixa: '🟢 Baixa' };

export default function TaskList() {
  const { tasks, deleteTask, toggleComplete, updateTask } = useTaskContext();
  const [filter, setFilter] = useState<'todas' | 'ativas' | 'concluídas'>('todas');
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');

  const filtered = tasks.filter(t =>
    filter === 'todas' ? true : filter === 'ativas' ? !t.completed : t.completed
  );

  function startEdit(task: Task) {
    setEditId(task.id);
    setEditTitle(task.title);
  }

  function saveEdit(id: number) {
    if (editTitle.trim()) updateTask(id, { title: editTitle.trim() });
    setEditId(null);
  }

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📋</div>
        <h3>Nenhuma tarefa ainda</h3>
        <p>Cria a tua primeira tarefa no painel ao lado.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      <div className="list-header">
        <h2>Tarefas ({tasks.length})</h2>
        <div className="filter-tabs">
          {(['todas', 'ativas', 'concluídas'] as const).map(f => (
            <button key={f} className={`filter-tab ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <ul className="tasks">
        {filtered.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <button className="task-check" onClick={() => toggleComplete(task.id)} aria-label="Alternar conclusão">
              {task.completed ? '✓' : '○'}
            </button>
            <div className="task-body">
              {editId === task.id ? (
                <input
                  className="edit-input"
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  onBlur={() => saveEdit(task.id)}
                  onKeyDown={e => e.key === 'Enter' && saveEdit(task.id)}
                  autoFocus
                />
              ) : (
                <span className="task-title" onDoubleClick={() => startEdit(task)}>{task.title}</span>
              )}
              {task.description && <p className="task-desc">{task.description}</p>}
              <span className={`priority-badge priority-${task.priority}`}>
                {PRIORITY_LABELS[task.priority]}
              </span>
            </div>
            <button className="task-delete" onClick={() => deleteTask(task.id)} aria-label="Eliminar tarefa">✕</button>
          </li>
        ))}
      </ul>
      {filtered.length === 0 && (
        <p className="empty-filter">Nenhuma tarefa {filter === 'ativas' ? 'ativa' : 'concluída'}.</p>
      )}
    </div>
  );
}
