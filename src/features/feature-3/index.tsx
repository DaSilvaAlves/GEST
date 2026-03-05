import { useTaskContext } from '../../App';

export default function TaskStats() {
  const { tasks } = useTaskContext();

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const alta = tasks.filter(t => t.priority === 'alta' && !t.completed).length;
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="task-stats">
      <h3>Progresso</h3>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <p className="progress-label">{pct}% concluído</p>
      <div className="stats-grid">
        <div className="stat">
          <span className="stat-num">{total}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat">
          <span className="stat-num">{completed}</span>
          <span className="stat-label">Concluídas</span>
        </div>
        <div className="stat">
          <span className="stat-num" style={{ color: '#ef4444' }}>{alta}</span>
          <span className="stat-label">Urgentes</span>
        </div>
      </div>
    </div>
  );
}
