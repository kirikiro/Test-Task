export type Priority = 'Low' | 'Medium' | 'High';

export interface ITask {
  id: string;
  title: string;
  description: string;
  priority?: Priority;
}

export interface IColumn {
  id: string;
  title: string;
  color: string;
  taskIds: Array<string>;
}

export interface IBoardState {
  tasks: Record<string, ITask>;
  columns: Record<string, IColumn>;
  columnOrder: Array<string>;
}