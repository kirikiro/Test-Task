import styled from "styled-components";

export const Frame6 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--gray0-white);
  border: 1px solid;
  border-color: var(--gray-20);
  border-radius: 24px;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  padding: 12px;
  position: relative;
  width: 100%;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const Frame7 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
`;

export const Frame8 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: 100%;
`;

export const TaskTitle = styled.div`
  align-self: stretch;
  color: var(--gray-80);
  font-family: var(--text-md-bold-font-family);
  font-size: var(--text-md-bold-font-size);
  font-weight: 700;
  line-height: var(--text-md-bold-line-height);
  position: relative;

  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
`;

export const TaskSubtitle = styled.div`
  align-self: stretch;
  color: var(--gray-60);
  font-family: var(--paragraph-md-font-family);
  font-size: var(--paragraph-md-font-size);
  font-weight: 400;
  line-height: var(--paragraph-md-line-height);
  position: relative;

  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const DeleteButton = styled.button`
  color: var(--gray-30);
  font-size: 18px;
  padding: 4px;
  transition: color 0.2s;
  &:hover {
    color: var(--destructive-50);
  }
`;