import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KanbanState, Column, Task, Priority } from '@/types';

// Начальное состояние с тремя дефолтными колонками
const defaultColumns: Record<string, Column> = {
  'col-todo': {
    id: 'col-todo',
    title: 'To Do',
    color: '#3b82f6', // синий
    taskIds: [],
  },
  'col-inprogress': {
    id: 'col-inprogress',
    title: 'In Progress',
    color: '#f59e0b', // оранжевый
    taskIds: [],
  },
  'col-done': {
    id: 'col-done',
    title: 'Done',
    color: '#10b981', // зеленый
    taskIds: [],
  },
};

const defaultTasks: Record<string, Task> = {
  'task-1': {
    id: 'task-1',
    title: 'UI/UX Design in the age of AI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    priority: 'Medium',
    columnId: 'col-todo',
  },
  'task-2': {
    id: 'task-2',
    title: 'Blog Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    priority: 'Medium',
    columnId: 'col-todo',
  },
  'task-3': {
    id: 'task-3',
    title: 'User flow confirmation for finance app',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    priority: 'Medium',
    columnId: 'col-inprogress',
  },
  'task-4': {
    id: 'task-4',
    title: 'Healthcare app wireframe flow',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    priority: 'Medium',
    columnId: 'col-inprogress',
  },
  'task-5': {
    id: 'task-5',
    title: 'UI/UX Design in the age of AI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    priority: 'High',
    columnId: 'col-done',
  },
  'task-6': {
    id: 'task-6',
    title: 'UI/UX Design in the age of AI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    priority: 'Low',
    columnId: 'col-done',
  },
};

// Заполняем taskIds в колонках
defaultColumns['col-todo'].taskIds = ['task-1', 'task-2'];
defaultColumns['col-inprogress'].taskIds = ['task-3', 'task-4'];
defaultColumns['col-done'].taskIds = ['task-5', 'task-6'];

const initialState: KanbanState = {
  columns: defaultColumns,
  tasks: defaultTasks,
  columnOrder: ['col-todo', 'col-inprogress', 'col-done'],
};

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    // Добавление колонки
    addColumn: (state, action: PayloadAction<{ title: string; color: string }>) => {
      const { title, color } = action.payload;
      const newId = `col-${Date.now()}`;
      state.columns[newId] = {
        id: newId,
        title,
        color,
        taskIds: [],
      };
      state.columnOrder.push(newId);
    },
    // Удаление колонки
    deleteColumn: (state, action: PayloadAction<string>) => {
      const columnId = action.payload;
      // Удаляем все задачи этой колонки
      const taskIds = state.columns[columnId].taskIds;
      taskIds.forEach((taskId) => {
        delete state.tasks[taskId];
      });
      delete state.columns[columnId];
      state.columnOrder = state.columnOrder.filter((id) => id !== columnId);
    },
    // Обновление названия или цвета колонки
    updateColumn: (state, action: PayloadAction<{ id: string; title?: string; color?: string }>) => {
      const { id, title, color } = action.payload;
      if (title !== undefined) state.columns[id].title = title;
      if (color !== undefined) state.columns[id].color = color;
    },
    // Добавление задачи
    addTask: (
      state,
      action: PayloadAction<{
        columnId: string;
        title: string;
        description: string;
        priority: Priority;
      }>
    ) => {
      const { columnId, title, description, priority } = action.payload;
      const newId = `task-${Date.now()}`;
      const newTask: Task = {
        id: newId,
        title,
        description,
        priority,
        columnId,
      };
      state.tasks[newId] = newTask;
      state.columns[columnId].taskIds.push(newId);
    },
    // Редактирование задачи
    updateTask: (
      state,
      action: PayloadAction<{ id: string; title?: string; description?: string; priority?: Priority }>
    ) => {
      const { id, title, description, priority } = action.payload;
      if (title !== undefined) state.tasks[id].title = title;
      if (description !== undefined) state.tasks[id].description = description;
      if (priority !== undefined) state.tasks[id].priority = priority;
    },
    // Удаление задачи
    deleteTask: (state, action: PayloadAction<{ taskId: string; columnId: string }>) => {
      const { taskId, columnId } = action.payload;
      delete state.tasks[taskId];
      state.columns[columnId].taskIds = state.columns[columnId].taskIds.filter((id) => id !== taskId);
    },
    // Перемещение задачи между колонками (Drag & Drop)
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
      // Удаляем из исходной колонки
      state.columns[sourceColumnId].taskIds.splice(sourceIndex, 1);
      // Вставляем в целевую колонку
      state.columns[destColumnId].taskIds.splice(destIndex, 0, taskId);
      // Обновляем columnId задачи
      state.tasks[taskId].columnId = destColumnId;
    },
  },
});

export const {
  addColumn,
  deleteColumn,
  updateColumn,
  addTask,
  updateTask,
  deleteTask,
  moveTask,
} = kanbanSlice.actions;
export default kanbanSlice.reducer;