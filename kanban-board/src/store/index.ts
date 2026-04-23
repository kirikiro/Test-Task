import { configureStore } from '@reduxjs/toolkit';

import { saveState } from '@/utils/localStorage';

import boardReducer from './boardSlice';

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
});

store.subscribe(() => {
  saveState({
    columns: store.getState().board.columns,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;