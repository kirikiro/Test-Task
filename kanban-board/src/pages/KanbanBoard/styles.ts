import styled from 'styled-components';

export const BoardContainer = styled.div`
  padding: 20px;
  overflow-x: auto;
  height: 100vh;
  overflow-y: auto;
`;

export const ColumnsWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  min-width: fit-content;
`;

export const AddColumnButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 12px 24px;
  margin-left: 8px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;