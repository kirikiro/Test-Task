import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { KanbanState, Column, Task } from '@/types';

const defaultColumns: Column[] = [
  { id: 'todo', title: 'To Do', color: '#ef4444', taskIds: [] },
  { id: 'inprogress', title: 'In Progress', color: '#f59e0b', taskIds: [] },
  { id: 'done', title: 'Done', color: '#10b981', taskIds: [] },
];

// const initialState: KanbanState = {
//   columns: {},
//   tasks: {},
//   columnOrder: [],
// };

const loadState = (): KanbanState => {
  const saved = localStorage.getItem('kanbanState');
  if (saved) {
    return JSON.parse(saved);
  }
  const columns: Record<string, Column> = {};
  const columnOrder: string[] = [];
  defaultColumns.forEach((col) => {
    columns[col.id] = col;
    columnOrder.push(col.id);
  });
  const tasks: Record<string, Task> = {
    task1: {
      id: 'task1',
      title: 'UI/UX Design in the age of AI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      priority: 'Medium',
      columnId: 'todo',
    },
    task2: {
      id: 'task2',
      title: 'Blog Copywriting',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      priority: 'Medium',
      columnId: 'todo',
    },
    task3: {
      id: 'task3',
      title: 'User flow confirmation for finance app',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      priority: 'Medium',
      columnId: 'inprogress',
    },
  };
  columns.todo.taskIds = ['task1', 'task2'];
  columns.inprogress.taskIds = ['task3'];
  return { columns, tasks, columnOrder };
};

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState: loadState(),
  reducers: {
    addColumn: (state, action: PayloadAction<{ title: string; color: string }>) => {
      const newId = `col-${Date.now()}`;
      state.columns[newId] = {
        id: newId,
        title: action.payload.title,
        color: action.payload.color,
        taskIds: [],
      };
      state.columnOrder.push(newId);
    },
    deleteColumn: (state, action: PayloadAction<string>) => {
      const colId = action.payload;
      const taskIds = state.columns[colId].taskIds;
      taskIds.forEach((tid) => delete state.tasks[tid]);
      delete state.columns[colId];
      state.columnOrder = state.columnOrder.filter((id) => id !== colId);
    },
    updateColumnTitle: (state, action: PayloadAction<{ id: string; title: string }>) => {
      if (state.columns[action.payload.id]) {
        state.columns[action.payload.id].title = action.payload.title;
      }
    },
    updateColumnColor: (state, action: PayloadAction<{ id: string; color: string }>) => {
      if (state.columns[action.payload.id]) {
        state.columns[action.payload.id].color = action.payload.color;
      }
    },
    addTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const newId = `task-${Date.now()}`;
      const task: Task = { ...action.payload, id: newId };
      state.tasks[newId] = task;
      state.columns[task.columnId].taskIds.push(newId);
    },
    updateTask: (state, action: PayloadAction<Partial<Task> & { id: string }>) => {
      const { id, ...changes } = action.payload;
      if (state.tasks[id]) {
        state.tasks[id] = { ...state.tasks[id], ...changes };
      }
    },
    deleteTask: (state, action: PayloadAction<{ taskId: string; columnId: string }>) => {
      const { taskId, columnId } = action.payload;
      delete state.tasks[taskId];
      state.columns[columnId].taskIds = state.columns[columnId].taskIds.filter(
        (id) => id !== taskId
      );
    },
    moveTask: (
      state,
      action: PayloadAction<{
        taskId: string;
        sourceColumnId: string;
        destColumnId: string;
        sourceIndex: number;
        destIndex: number;
      }>
    ) => {
      const { taskId, sourceColumnId, destColumnId, sourceIndex, destIndex } = action.payload;
      if (sourceColumnId === destColumnId) {
        const column = state.columns[sourceColumnId];
        const newTaskIds = [...column.taskIds];
        newTaskIds.splice(sourceIndex, 1);
        newTaskIds.splice(destIndex, 0, taskId);
        column.taskIds = newTaskIds;
      } else {
        state.columns[sourceColumnId].taskIds = state.columns[sourceColumnId].taskIds.filter(
          (id) => id !== taskId
        );
        state.columns[destColumnId].taskIds.splice(destIndex, 0, taskId);
        state.tasks[taskId].columnId = destColumnId;
      }
    },
  },
});

export const {
  addColumn,
  deleteColumn,
  updateColumnTitle,
  updateColumnColor,
  addTask,
  updateTask,
  deleteTask,
  moveTask,
} = kanbanSlice.actions;
export default kanbanSlice.reducer;