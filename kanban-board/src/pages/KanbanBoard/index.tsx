import React from 'react';
import * as C from '@/styles/components';

const KanbanBoard: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <C.Title1>Kanban Board</C.Title1>
      <C.Text>Здесь будет доска</C.Text>
    </div>
  );
};

export default KanbanBoard;