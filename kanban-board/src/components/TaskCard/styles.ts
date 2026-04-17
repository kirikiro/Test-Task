import styled from 'styled-components';

export const Card = styled.div<{ priorityColor?: string }>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 12px;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border-left: 4px solid ${({ priorityColor, theme }) => priorityColor || theme.colors.gray300};
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  }
`;

export const CardTitle = styled.h4`
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
`;

export const CardDescription = styled.p`
  margin: 0 0 8px 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray500};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PriorityBadge = styled.span<{ priorityColor: string }>`
  background-color: ${({ priorityColor }) => priorityColor};
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 12px;
  display: inline-block;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray500};
  font-size: 14px;
  &:hover {
    color: ${({ theme }) => theme.colors.danger};
  }
`;