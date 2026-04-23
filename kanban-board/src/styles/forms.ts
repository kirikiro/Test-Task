import styled, { css } from 'styled-components';

const baseInputStyles = css`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  font-size: 14px;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.cardBg};
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.columns.todo};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const Input = styled.input`
  ${baseInputStyles}
`;

export const Textarea = styled.textarea`
  ${baseInputStyles}
  resize: vertical;
  min-height: 80px;
`;