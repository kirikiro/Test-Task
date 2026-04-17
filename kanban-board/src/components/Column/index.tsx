import React from 'react';
import { useDispatch } from 'react-redux';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { deleteColumn, updateColumnTitle, updateColumnColor } from '@/store/slices/kanbanSlice';
import { TaskCard } from '@/components/TaskCard';
import * as S from './styles';

interface ColumnProps {
  columnId: string;
  title: string;
  color: string;
  tasks: Array<{
    id: string;
    title: string;
    description: string;
    priority: 'Low' | 'Medium' | 'High' | null;
  }>;
  onAddTask: (columnId: string) => void;
  onEditTask: (taskId: string) => void;
  onDeleteTask: (taskId: string, columnId: string) => void;
}

export const Column: React.FC<ColumnProps> = ({
  columnId,
  title,
  color,
  tasks,
  onAddTask,
  onEditTask,
  onDeleteTask,
}) => {
  const dispatch = useDispatch();
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: columnId,
    data: { type: 'column', columnId },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleDeleteColumn = () => {
    if (window.confirm(`Delete column "${title}"? All tasks will be deleted.`)) {
      dispatch(deleteColumn(columnId));
    }
  };

  const handleTitleEdit = () => {
    const newTitle = prompt('Enter new column title:', title);
    if (newTitle && newTitle.trim()) {
      dispatch(updateColumnTitle({ id: columnId, title: newTitle.trim() }));
    }
  };

  const handleColorEdit = () => {
    const newColor = prompt('Enter new column color (hex or color name):', color);
    if (newColor && newColor.trim()) {
      dispatch(updateColumnColor({ id: columnId, color: newColor.trim() }));
    }
  };

  return (
    <S.ColumnContainer ref={setNodeRef} style={style} columnColor={color}>
      <S.ColumnHeader color={color} onClick={handleColorEdit}>
        <S.ColumnTitle onClick={handleTitleEdit} {...attributes} {...listeners}>
          {title}
        </S.ColumnTitle>
        <S.TaskCount>{tasks.length}</S.TaskCount>
        <S.DeleteColumnButton onClick={handleDeleteColumn}>×</S.DeleteColumnButton>
      </S.ColumnHeader>
      <S.TaskList>
        {tasks.map((task, index) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            index={index}
            onEdit={() => onEditTask(task.id)}
            onDelete={() => onDeleteTask(task.id, columnId)}
          />
        ))}
      </S.TaskList>
      <S.AddButton onClick={() => onAddTask(columnId)}>+ Add task</S.AddButton>
    </S.ColumnContainer>
  );
};