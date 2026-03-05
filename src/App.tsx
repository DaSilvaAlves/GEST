import { useState, createContext, useContext } from 'react';
import type { Task } from './types/index';
import TaskForm from './features/feature-1';
import TaskList from './features/feature-2';
import TaskStats from './features/feature-3';
import './styles/theme.css';

interface TaskContextType {
  tasks: Task[];
  createTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTask: (id: number, updates: Partial<Task>) => void;
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
}

export const TaskContext = createContext<TaskContextType | null>(null);

export function useTaskContext() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error('useTaskContext must be used inside TaskContext.Provider');
  return ctx;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(data: Omit<Task, 'id' | 'createdAt'>) {
    setTasks(prev => [...prev, { ...data, id: Date.now(), createdAt: new Date().toISOString() }]);
  }

  function updateTask(id: number, updates: Partial<Task>) {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, ...updates } : t)));
  }

  function deleteTask(id: number) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  function toggleComplete(id: number) {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask, toggleComplete }}>
      <div className="app">
        <header className="app-header">
          <h1>Gestor de Tarefas</h1>
          <p>Organiza e prioriza o teu trabalho</p>
        </header>
        <main className="app-main">
          <aside className="sidebar">
            <TaskForm />
            <TaskStats />
          </aside>
          <section className="content">
            <TaskList />
          </section>
        </main>
      </div>
    </TaskContext.Provider>
  );
}
