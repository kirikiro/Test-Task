import React from 'react';
import * as S from './styles';

export interface KanbanActionButtonProps {
  state?: S.KanbanActionState;
  customColor?: string; // ДОБАВЛЕНО
  className?: string;
  count?: string | number;
  text?: string;
  onClick?: () => void;
  onDelete?: (e: React.MouseEvent) => void;
  showDelete?: boolean;
}

// const stateToLabelColor = {
//   "in-progress": "var(--brand-60)",
//   "reviewed": "var(--warning-50)",
//   "completed": "var(--success-50)",
//   "add-column": "#C1D4C8"
// };

export const KanbanActionButton: React.FC<KanbanActionButtonProps> = ({
  state = "in-progress",
  customColor,
  className = "",
  count = "0",
  text = "In Progress",
  onClick,
  onDelete,
  showDelete = false,
}) => {
  return (
    <S.StyledKanbanActionButton 
      className={className} 
      $stateStyle={state}
      $customColor={customColor}
      onClick={onClick}
    >
      <S.FrameWrapper>
        <S.Frame>
          <S.NumberBadge>
            <S.TextLabel $stateStyle={state} $customColor={customColor}>
              {count}
            </S.TextLabel>
          </S.NumberBadge>

          <S.InProgressText $stateStyle={state}>
            {text}
          </S.InProgressText>
        </S.Frame>
      </S.FrameWrapper>
      
      {showDelete ? (
        <S.StyledPlusIcon 
          $stateStyle={state} 
          onClick={(e) => {
            e.stopPropagation();
            onDelete?.(e);
          }}
        >
          ✕
        </S.StyledPlusIcon>
      ) : (
        <S.StyledPlusIcon $stateStyle={state}>+</S.StyledPlusIcon>
      )}
    </S.StyledKanbanActionButton>
  );
};