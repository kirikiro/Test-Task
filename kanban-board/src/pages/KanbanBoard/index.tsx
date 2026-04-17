import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from '@dnd-kit/core';
import { RootState } from '@/store';
import { addColumn, addTask, updateTask, moveTask, deleteTask } from '@/store/slices/kanbanSlice';
import { Column } from '@/components/Column';
import { TaskCard } from '@/components/TaskCard';
import { Modal } from '@/components/Modal/';
import { TaskForm } from '@/components/TaskForm/';
import { Priority } from '@/types';
import * as S from './styles';

const KanbanBoard: React.FC = () => {
  const dispatch = useDispatch();
  const { columns, tasks, columnOrder } = useSelector((state: RootState) => state.kanban);
  const [activeTask, setActiveTask] = useState<{ id: string; columnId: string } | null>(null);
  const [isTaskModalOpen, setTaskModalOpen] = useState(false);
  const [currentColumnId, setCurrentColumnId] = useState<string | null>(null);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const taskId = active.id as string;
    let columnId = '';
    for (const col of Object.values(columns)) {
      if (col.taskIds.includes(taskId)) {
        columnId = col.id;
        break;
      }
    }
    setActiveTask({ id: taskId, columnId });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) {
      setActiveTask(null);
      return;
    }

    const taskId = active.id as string;
    const sourceColumnId = activeTask?.columnId;
    const destColumnId = over.id as string;

    if (!sourceColumnId) {
      setActiveTask(null);
      return;
    }

    if (sourceColumnId === destColumnId) {
      // Сортировка внутри колонки
      const column = columns[sourceColumnId];
      const oldIndex = column.taskIds.indexOf(taskId);
      const newIndex = column.taskIds.indexOf(over.id as string);
      if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
        dispatch(moveTask({
          taskId,
          sourceColumnId,
          destColumnId,
          sourceIndex: oldIndex,
          destIndex: newIndex,
        }));
      }
    } else {
      // Перемещение между колонками
      const destColumn = columns[destColumnId];
      const newIndex = destColumn.taskIds.length;
      dispatch(moveTask({
        taskId,
        sourceColumnId,
        destColumnId,
        sourceIndex: -1, // не используется при перемещении между колонками, но требуется по типу
        destIndex: newIndex,
      }));
    }
    setActiveTask(null);
  };

  const handleAddTask = (columnId: string) => {
    setCurrentColumnId(columnId);
    setEditingTaskId(null);
    setTaskModalOpen(true);
  };

  const handleEditTask = (taskId: string) => {
    setEditingTaskId(taskId);
    setCurrentColumnId(null);
    setTaskModalOpen(true);
  };

  const handleTaskSubmit = (data: { title: string; description: string; priority: Priority }) => {
    if (editingTaskId) {
      dispatch(updateTask({ id: editingTaskId, ...data }));
    } else if (currentColumnId) {
      dispatch(addTask({
        title: data.title,
        description: data.description,
        priority: data.priority,
        columnId: currentColumnId,
      }));
    }
    setTaskModalOpen(false);
    setEditingTaskId(null);
    setCurrentColumnId(null);
  };

  const handleDeleteTask = (taskId: string, columnId: string) => {
    if (window.confirm('Delete task?')) {
      dispatch(deleteTask({ taskId, columnId }));
    }
  };

  const handleAddColumn = () => {
    const title = prompt('Enter column title:');
    if (title?.trim()) {
      const color = prompt('Enter column color (hex or name):', '#3b82f6');
      dispatch(addColumn({ title: title.trim(), color: color || '#3b82f6' }));
    }
  };

  const editingTask = editingTaskId ? tasks[editingTaskId] : undefined;
  const activeTaskData = activeTask ? tasks[activeTask.id] : null;

  return (
    <S.BoardContainer>
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <S.ColumnsWrapper>
          {columnOrder.map((colId) => {
            const column = columns[colId];
            const columnTasks = column.taskIds.map((taskId) => tasks[taskId]);
            return (
              <Column
                key={colId}
                columnId={colId}
                title={column.title}
                color={column.color}
                tasks={columnTasks}
                onAddTask={handleAddTask}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
              />
            );
          })}
          <S.AddColumnButton onClick={handleAddColumn}>+ Add column</S.AddColumnButton>
        </S.ColumnsWrapper>
        <DragOverlay>
          {activeTaskData ? (
            <TaskCard
              id={activeTaskData.id}
              title={activeTaskData.title}
              description={activeTaskData.description}
              priority={activeTaskData.priority}
              index={0}
              onEdit={() => {}}
              onDelete={() => {}}
              isDraggingOverlay
            />
          ) : null}
        </DragOverlay>
      </DndContext>

      <Modal
        isOpen={isTaskModalOpen}
        onClose={() => setTaskModalOpen(false)}
        title={editingTaskId ? 'Edit Task' : 'Add Task'}
      >
        <TaskForm
          initialTask={editingTask}
          onSubmit={handleTaskSubmit}
          onCancel={() => setTaskModalOpen(false)}
        />
      </Modal>
    </S.BoardContainer>
  );
};

export default KanbanBoard;