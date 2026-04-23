import { ITheme } from '@/interfaces/styled';

export const theme: ITheme = {
  colors: {
    bg: 'var(--gray-5)',
    cardBg: 'var(--gray0-white)',
    text: {
      primary: 'var(--gray-80)',
      secondary: 'var(--gray-60)',
    },
    border: 'var(--gray-20)',
    columns: {
      todo: 'var(--brand-60)',
      inProgress: 'var(--warning-50)',
      done: 'var(--success-50)',
    },
    priority: {
      high: { text: 'var(--destructive-50)', bg: 'var(--destructive-5)' },
      medium: { text: 'var(--brand-60)', bg: 'var(--brand-5)' },
      low: { text: 'var(--success-50)', bg: 'var(--success-5)' },
    },
  },
  sizes: {
    borderRadius: {
      small: '8px',
      medium: '24px', // Из кода Figma (Frame6)
      large: '32px',  // Из кода Figma (Frame3)
    },
  },
  media: {
    mobile: '(max-width: 390px)',
  },
};