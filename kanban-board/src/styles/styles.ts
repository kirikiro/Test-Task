import styled, { css } from 'styled-components';

import { Priority } from '@/interfaces/board';

export const Title1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Title2 = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.4;
`;

export const PriorityBadge = styled.span<{ $priority?: Priority }>`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  font-size: 12px;
  font-weight: 500;

  ${({ theme, $priority }) => {
    switch ($priority) {
      case 'High':
        return css`
          color: ${theme.colors.priority.high.text};
          background-color: ${theme.colors.priority.high.bg};
        `;
      case 'Medium':
        return css`
          color: ${theme.colors.priority.medium.text};
          background-color: ${theme.colors.priority.medium.bg};
        `;
      case 'Low':
        return css`
          color: ${theme.colors.priority.low.text};
          background-color: ${theme.colors.priority.low.bg};
        `;
      default:
        return css`
          color: ${theme.colors.text.secondary};
          background-color: ${theme.colors.border};
        `;
    }
  }}
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.medium};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;