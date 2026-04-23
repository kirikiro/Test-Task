import styled, { css } from 'styled-components';

export type ButtonVariant = 'solid' | 'ghost' | 'icon';

interface IStyledButtonProps {
  $variant: ButtonVariant;
  $fullWidth?: boolean;
}

export const Button = styled.button<IStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.medium};
  transition: all 0.2s ease-in-out;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'solid':
        return css`
          background-color: ${theme.colors.columns.todo};
          color: #ffffff;
          padding: 8px 16px;
          &:hover {
            opacity: 0.9;
          }
        `;
      case 'ghost':
        return css`
          background-color: transparent;
          color: ${theme.colors.text.secondary};
          padding: 8px 12px;
          &:hover {
            background-color: ${theme.colors.border};
            color: ${theme.colors.text.primary};
          }
        `;
      case 'icon':
        return css`
          background-color: transparent;
          color: ${theme.colors.text.secondary};
          padding: 4px;
          border-radius: 50%;
          &:hover {
            background-color: rgba(0, 0, 0, 0.05);
            color: ${theme.colors.text.primary};
          }
        `;
      default:
        return css``;
    }
  }}
`;