import styled from 'styled-components';

export const Divider = styled.div<{ height?: number; heightMob?: number }>`
  height: ${({ height = 8 }) => height}px;
  @media ${({ theme }) => theme.media.mobile} {
    height: ${({ heightMob = 4 }) => heightMob}px;
  }
`;

export const Title1 = styled.h1<{ weight?: 200 | 300 | 400 | 500 | 600 | 700 }>`
  font-size: 24px;
  font-weight: ${({ weight = 700 }) => weight};
  color: ${({ theme }) => theme.colors.font};
`;

export const Title2 = styled.h2<{ weight?: 200 | 300 | 400 | 500 | 600 | 700 }>`
  font-size: 18px;
  font-weight: ${({ weight = 700 }) => weight};
  color: ${({ theme }) => theme.colors.font};
`;

export const Text = styled.p<{ primary?: boolean }>`
  font-size: 14px;
  color: ${({ primary, theme }) => (primary ? theme.colors.primary : theme.colors.gray700)};
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 500;
  transition: all ${({ theme }) => theme.durations.fast}ms ease;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.98);
  }
`;