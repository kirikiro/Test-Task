import styled from 'styled-components';

export const ColumnContainer = styled.div<{ columnColor: string }>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: ${({ theme }) => theme.sizes.columnWidth}px;
  min-width: ${({ theme }) => theme.sizes.columnWidth}px;
  margin: 0 8px;
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const ColumnHeader = styled.div<{ color: string }>`
  padding: 12px;
  background-color: ${({ color }) => color};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.medium};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;

export const ColumnTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  flex-grow: 1;
`;

export const TaskCount = styled.span`
  background-color: rgba(0,0,0,0.3);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-left: 8px;
`;

export const TaskList = styled.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 200px;
`;

export const AddButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  padding: 8px;
  margin: 8px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;

export const DeleteColumnButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;