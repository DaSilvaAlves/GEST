import React, { useState, createContext, useContext } from 'react';
import { Task } from './types/index';
import Feature1 from './features/feature-1';
import Feature2 from './features/feature-2';
import Feature3 from './features/feature-3';
import './styles/theme.css';

interface TaskContext {
  tasks: Task[];
  createTask: (task: Task) => void;
  updateTask: (id: number, task: Task) => void  deleteTask: (id: number) => void;
}

const TaskContext = createContext<TaskContext | null>(null);

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (id: number, task: Task) => {
    setTasks(tasks.map((t) => (t.id === id ? task : t)));
  };

  const deleteTask = (id:) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      <div className="grid">
        <Feature1 />
        <Feature2 />
        <Feature3 />
      </div>
    </TaskContext.Provider>
  );
};

export default App;