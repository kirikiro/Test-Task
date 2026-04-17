export type Priority = 'Low' | 'Medium' | 'High' | null;

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  columnId: string;
}

export interface Column {
  id: string;
  title: string;
  color: string; // цвет заголовка колонки (hex или rgb)
  taskIds: string[]; // массив id задач для быстрого доступа
}

export interface KanbanState {
  columns: Record<string, Column>;
  tasks: Record<string, Task>;
  columnOrder: string[]; // порядок колонок
}