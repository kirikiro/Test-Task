import React, { useCallback, useMemo, useState } from 'react';
import { Droppable } from '@hello-pangea/dnd';

import { KanbanActionButton } from '@/components/KanbanActionButton/KanbanActionButton';
import { Modal } from '@/components/modal/Modal';
import { TaskCard } from '@/components/TaskCard/TaskCard';
import { TaskForm } from '@/components/TaskForm/TaskForm';
import { useAppDispatch } from '@/hooks/redux';
import { IColumn, ITask } from '@/interfaces/board';
import { addTask, deleteColumn, updateTask } from '@/store/boardSlice'; // Добавили экшены

import * as S from './styles';

interface IColumnProps {
  column: IColumn;
}

const ColumnComponent: React.FC<IColumnProps> = ({ column }) => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<ITask | null>(null);

  const handleOpenAdd = useCallback(() => {
    setEditingTask(null);
    setIsModalOpen(true);
  }, []);

  const handleOpenEdit = useCallback((task: ITask) => {
    setEditingTask(task);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setEditingTask(null);
  }, []);

  const handleSaveTask = useCallback(
    (data: { title: string; description: string; priority: any }) => {
      if (editingTask) {
        dispatch(
          updateTask({
            columnId: column.id,
            taskId: editingTask.id,
            updatedData: data,
          }),
        );
      } else {
        dispatch(addTask({ columnId: column.id, task: data }));
      }
      handleCloseModal();
    },
    [dispatch, column.id, editingTask, handleCloseModal],
  );

  const handleDeleteColumn = useCallback(() => {
    if (window.confirm(`Delete column "${column.title}"?`)) {
      dispatch(deleteColumn(column.id));
    }
  }, [dispatch, column.id, column.title]);

  const state = useMemo(() => {
    const title = column.title.toLowerCase();
    if (title.includes('done') || title.includes('comp')) return 'completed';
    if (title.includes('review')) return 'reviewed';
    return 'in-progress';
  }, [column.title]);

  const columnColor = column.color || '#4F46E5';
  const taskBtnBg = `${columnColor}4D`;

  return (
    <>
      <S.ColumnContainer>
        <KanbanActionButton
          state={state}
          customColor={column.color}
          count={column.tasks.length}
          text={column.title}
          showDelete={true}
          onDelete={handleDeleteColumn}
        />

        <Droppable droppableId={column.id}>
          {(provided) => (
            <S.TaskListContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {column.tasks.map((task, index) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  columnId={column.id}
                  index={index}
                  onEdit={() => handleOpenEdit(task)}
                />
              ))}
              {provided.placeholder}
            </S.TaskListContainer>
          )}
        </Droppable>

        <S.AddTaskWrapper>
          <S.AddTaskButton
            $color={columnColor}
            $bgColor={taskBtnBg}
            onClick={handleOpenAdd}
          >
            Add task...
          </S.AddTaskButton>
        </S.AddTaskWrapper>
      </S.ColumnContainer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <TaskForm
          onSubmit={handleSaveTask}
          initialData={editingTask || undefined}
          buttonText={editingTask ? 'Save Changes' : 'Create Task'}
        />
      </Modal>
    </>
  );
};

export const Column = React.memo(ColumnComponent);
