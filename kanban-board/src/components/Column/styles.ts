import styled from "styled-components";

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  min-width: 320px;
  gap: 24px;
  align-self: flex-start;
  box-sizing: border-box;
`;

export const TaskListContainer = styled.div`
  background-color: var(--gray-5);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--gray-10);
  min-height: 100px;
  width: 100%;
  box-sizing: border-box;
`;

export const AddTaskWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 12px;
`;

export const AddTaskButton = styled.button<{ $color: string; $bgColor: string }>`
  color: ${({ $color }) => $color};
  background-color: ${({ $bgColor }) => $bgColor};
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 9999px;
  
  width: 100%; 
  min-height: 44px;
  height: 44px;

  font-family: var(--font-family-main);
  font-size: 14px;
  font-weight: 700;
  transition: opacity 0.2s;
  box-sizing: border-box;

  &:hover {
    opacity: 0.8;
  }
`;