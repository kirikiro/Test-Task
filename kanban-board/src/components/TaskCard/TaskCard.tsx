import React, { useCallback } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { useAppDispatch } from '@/hooks/redux';
import { ITask } from '@/interfaces/board';
import { deleteTask } from '@/store/boardSlice';
import { PriorityBadge } from '@/styles/styles';
import * as S from './styles';

interface ITaskCardProps {
  task: ITask;
  columnId: string;
  index: number;
  onEdit: () => void; 
}

const TaskCardComponent: React.FC<ITaskCardProps> = ({ task, columnId, index, onEdit }) => {
  const dispatch = useAppDispatch();

  const handleDelete = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Delete this task?')) {
      dispatch(deleteTask({ columnId, taskId: task.id }));
    }
  }, [dispatch, columnId, task.id]);

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <S.Frame6
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={onEdit}
          title="Click to edit"
        >
          <S.Frame7>
            <S.Header>
              {task.priority && (
                <PriorityBadge $priority={task.priority}>
                  {task.priority}
                </PriorityBadge>
              )}
              <S.DeleteButton onClick={handleDelete}>✕</S.DeleteButton>
            </S.Header>
            <S.Frame8>
              <S.TaskTitle>{task.title}</S.TaskTitle>
              {task.description && <S.TaskSubtitle>{task.description}</S.TaskSubtitle>}
            </S.Frame8>
          </S.Frame7>
        </S.Frame6>
      )}
    </Draggable>
  );
};

export const TaskCard = React.memo(TaskCardComponent);