import React, { useCallback, useState } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import styled from 'styled-components';

import { Button } from '@/components/Button';
import { Column } from '@/components/Column/Column'; // Явный путь к файлу
import { KanbanActionButton } from '@/components/KanbanActionButton/KanbanActionButton';
import { Modal } from '@/components/modal/Modal';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { addColumn, moveTask } from '@/store/boardSlice';
import { Input } from '@/styles/forms';

import * as S from './styles';

const RAINBOW_COLORS = [
  { name: 'Red', hex: '#EF4444' },
  { name: 'Orange', hex: '#F97316' },
  { name: 'Yellow', hex: '#FACC15' },
  { name: 'Green', hex: '#22C55E' },
  { name: 'Blue', hex: '#3B82F6' },
  { name: 'Indigo', hex: '#6366F1' },
  { name: 'Violet', hex: '#A855F7' },
  { name: 'Default', hex: '#4F46E5' },
];

const ColorPickerContainer = styled.div`
  display: flex;
  gap: 8px;
  margin: 16px 0;
  flex-wrap: wrap;
`;

interface IColorOptionProps {
  $color: string;
  $isActive: boolean;
}

const ColorOption = styled.div<IColorOptionProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  cursor: pointer;
  border: 2px solid
    ${(props) => (props.$isActive ? 'var(--gray-80)' : 'transparent')};
  transition: transform 0.1s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const BoardPage: React.FC = () => {
  const columns = useAppSelector((state) => state.board.columns);
  const dispatch = useAppDispatch();
  const [isColModalOpen, setIsColModalOpen] = useState(false);
  const [newColTitle, setNewColTitle] = useState('');
  const [selectedColor, setSelectedColor] = useState(RAINBOW_COLORS[7].hex);

  const toggleModal = useCallback(() => {
    setIsColModalOpen((prev) => !prev);
    setNewColTitle('');
    setSelectedColor(RAINBOW_COLORS[7].hex);
  }, []);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;
      if (!destination) return;
      dispatch(
        moveTask({
          sourceColumnId: source.droppableId,
          destinationColumnId: destination.droppableId,
          sourceIndex: source.index,
          destinationIndex: destination.index,
        }),
      );
    },
    [dispatch],
  );

  const handleAddColumn = (e: React.FormEvent) => {
    e.preventDefault();
    if (newColTitle.trim()) {
      dispatch(
        addColumn({
          title: newColTitle,
          color: selectedColor,
        }),
      );
      setNewColTitle('');
      toggleModal();
    }
  };

  return (
    <S.DesktopContainer>
      <S.Frame14>
        <S.DivWrapper>
          <S.Frame15>
            <S.AnalyticsDashboard>Kanban Dashboard</S.AnalyticsDashboard>
          </S.Frame15>
        </S.DivWrapper>

        <S.Frame17>
          <DragDropContext onDragEnd={onDragEnd}>
            <S.Frame18>
              {columns.map((column) => (
                <Column key={column.id} column={column} />
              ))}

              {/* Кнопка добавления колонки */}
              <div style={{ width: '320px', minWidth: '320px' }}>
                <KanbanActionButton
                  state="add-column"
                  text="Add Column"
                  count="0"
                  onClick={toggleModal}
                />
              </div>
            </S.Frame18>
          </DragDropContext>
        </S.Frame17>
      </S.Frame14>

      <Modal isOpen={isColModalOpen} onClose={toggleModal}>
        <S.AnalyticsDashboard style={{ fontSize: '20px' }}>
          New Column
        </S.AnalyticsDashboard>
        <form onSubmit={handleAddColumn} style={{ marginTop: '16px' }}>
          <Input
            placeholder="Title"
            value={newColTitle}
            onChange={(e) => setNewColTitle(e.target.value)}
            required
            maxLength={50}
          />

          <p
            style={{
              fontSize: '12px',
              marginTop: '12px',
              color: 'var(--gray-60)',
            }}
          >
            Pick a color:
          </p>
          <ColorPickerContainer>
            {RAINBOW_COLORS.map((color) => (
              <ColorOption
                key={color.hex}
                $color={color.hex}
                $isActive={selectedColor === color.hex}
                onClick={() => setSelectedColor(color.hex)}
                title={color.name}
              />
            ))}
          </ColorPickerContainer>

          <Button type="submit" fullWidth style={{ marginTop: '12px' }}>
            Create
          </Button>
        </form>
      </Modal>
    </S.DesktopContainer>
  );
};