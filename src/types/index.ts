interface Task {
  id: number;
  title string;
  description: string;
  priority: 'alta' | 'média' | 'baixa';
  completed: boolean;
}

interface TaskContext {
  tasks: Task[];
  createTask: (task: Task) => void;
  updateTask: (id: number, task: Task) => void;
  deleteTask: (id: number) => void;
}