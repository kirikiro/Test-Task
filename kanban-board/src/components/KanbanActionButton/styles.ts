import styled from 'styled-components';

export type KanbanActionState =
  | 'completed'
  | 'in-progress'
  | 'reviewed'
  | 'add-column';

const backgroundColorByState: Record<KanbanActionState, string> = {
  'in-progress': 'var(--brand-60)',
  reviewed: 'var(--warning-50)',
  completed: 'var(--success-50)',
  'add-column': '#C1D4C8',
};

const labelColorByState: Record<KanbanActionState, string> = {
  'in-progress': 'var(--brand-60)',
  reviewed: 'var(--warning-50)',
  completed: 'var(--success-50)',
  'add-column': '#C1D4C8',
};

export const StyledKanbanActionButton = styled.div<{
  $stateStyle: KanbanActionState;
  $customColor?: string;
}>`
  align-items: center;
  border-radius: 9999px;
  display: flex;
  gap: 12px;
  padding: 8px 16px 8px 8px;
  position: relative;
  width: 100%;
  max-width: none;
  min-height: 44px;
  height: 44px;
  background-color: ${({ $customColor, $stateStyle }) =>
    $customColor || backgroundColorByState[$stateStyle]};
  cursor: pointer;
  transition: transform 0.2s;
  box-sizing: border-box;
  &:hover {
    transform: translateY(-2px);
  }
`;

export const FrameWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  gap: 14px;
`;

export const Frame = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  gap: 8px;
`;

export const NumberBadge = styled.div`
  align-items: center;
  background-color: var(--gray0-white);
  border-radius: 9999px; /* Всегда круглый */
  display: inline-flex;
  height: 28px;
  min-width: 28px;
  justify-content: center;
  padding: 0 8px;

  span {
    font-family: var(--text-sm-semibold-font-family);
    font-size: var(--text-sm-semibold-font-size);
    font-weight: 800;
    line-height: 1;
  }
`;

export const InProgressText = styled.div<{ $stateStyle: KanbanActionState }>`
  color: var(--gray0-white);

  flex: 1;
  font-family: var(--text-md-bold-font-family);
  font-size: var(--text-md-bold-font-size);
  font-weight: 700;
  white-space: nowrap;
`;

export const StyledPlusIcon = styled.div<{ $stateStyle: KanbanActionState }>`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  color: var(--gray0-white);

  font-size: 20px;
  font-weight: bold;
`;

export const TextLabel = styled.div<{
  $stateStyle: KanbanActionState;
  $customColor?: string;
}>`
  font-family: var(--text-sm-semibold-font-family);
  font-size: var(--text-sm-semibold-font-size);
  font-weight: 800;
  text-align: center;
  color: ${({ $customColor, $stateStyle }) =>
    $customColor || labelColorByState[$stateStyle]};
`;
