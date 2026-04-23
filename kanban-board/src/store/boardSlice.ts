import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

import { IBoardState, ITask } from '@/interfaces/board';
import { loadState } from '@/utils/localStorage';

const defaultInitialState: IBoardState = {
  columns: [
    { 
      id: nanoid(), 
      title: 'To Do', 
      color: '#4F46E5',
      tasks: [] 
    },
    { 
      id: nanoid(), 
      title: 'In progress', 
      color: '#F97316', 
      tasks: [] 
    },
    { 
      id: nanoid(), 
      title: 'Done', 
      color: '#22C55E',
      tasks: [] 
    },
  ],
};

const initialState: IBoardState = loadState() || defaultInitialState;

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addColumn: (state, action: PayloadAction<{ title: string; color?: string }>) => {
      state.columns.push({
        id: nanoid(),
        title: action.payload.title,
        color: action.payload.color || 'todo',
        tasks:[],
      });
    },
    deleteColumn: (state, action: PayloadAction<string>) => {
      state.columns = state.columns.filter((col) => col.id !== action.payload);
    },
    addTask: (
      state,
      action: PayloadAction<{ columnId: string; task: Omit<ITask, 'id'> }>
    ) => {
      const column = state.columns.find((col) => col.id === action.payload.columnId);
      if (column) {
        column.tasks.push({
          id: nanoid(),
          ...action.payload.task,
        });
      }
    },
    updateTask: (
      state,
      action: PayloadAction<{ columnId: string; taskId: string; updatedData: Partial<ITask> }>
    ) => {
      const column = state.columns.find((col) => col.id === action.payload.columnId);
      if (column) {
        const taskIndex = column.tasks.findIndex((t) => t.id === action.payload.taskId);
        if (taskIndex !== -1) {
          column.tasks[taskIndex] = {
            ...column.tasks[taskIndex],
            ...action.payload.updatedData,
          };
        }
      }
    },
    deleteTask: (
      state,
      action: PayloadAction<{ columnId: string; taskId: string }>
    ) => {
      const column = state.columns.find((col) => col.id === action.payload.columnId);
      if (column) {
        column.tasks = column.tasks.filter((t) => t.id !== action.payload.taskId);
      }
    },
    moveTask: (
      state,
      action: PayloadAction<{
        sourceColumnId: string;
        destinationColumnId: string;
        sourceIndex: number;
        destinationIndex: number;
      }>
    ) => {
      const { sourceColumnId, destinationColumnId, sourceIndex, destinationIndex } = action.payload;
      const sourceColumn = state.columns.find((col) => col.id === sourceColumnId);
      const destColumn = state.columns.find((col) => col.id === destinationColumnId);

      if (sourceColumn && destColumn) {
        const[movedTask] = sourceColumn.tasks.splice(sourceIndex, 1);
        destColumn.tasks.splice(destinationIndex, 0, movedTask);
      }
    },
  },
});

export const { addColumn, deleteColumn, addTask, updateTask, deleteTask, moveTask } = boardSlice.actions;
export default boardSlice.reducer;