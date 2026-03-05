export interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'alta' | 'média' | 'baixa';
  completed: boolean;
  createdAt: string;
}
