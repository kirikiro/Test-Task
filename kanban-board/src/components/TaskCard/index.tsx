import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import * as S from './styles';

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High' | null;
  index: number;
  onEdit: () => void;
  onDelete: () => void;
  isDraggingOverlay?: boolean;
}

const priorityColors: Record<string, string> = {
  Low: '#10b981',
  Medium: '#f59e0b',
  High: '#ef4444',
};

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  description,
  priority,
  onEdit,
  onDelete,
  isDraggingOverlay = false,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
    data: { type: 'task', taskId: id },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging && !isDraggingOverlay ? 0.3 : 1,
  };

  const priorityColor = priority ? priorityColors[priority] : '#d1d5db';

  return (
    <S.Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      priorityColor={priorityColor}
    >
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDescription>{description}</S.CardDescription>
      {priority && <S.PriorityBadge priorityColor={priorityColor}>{priority}</S.PriorityBadge>}
      <S.CardActions>
        <S.IconButton onClick={onEdit}>✏️</S.IconButton>
        <S.IconButton onClick={onDelete}>🗑️</S.IconButton>
      </S.CardActions>
    </S.Card>
  );
};