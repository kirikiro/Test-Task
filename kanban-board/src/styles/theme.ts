import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#3b82f6',
    secondary: '#6b7280',
    success: '#10b981',
    danger: '#ef4444',
    warning: '#f59e0b',
    bg: '#f9fafb',
    font: '#111827',
    white: '#ffffff',
    gray100: '#f3f4f6',
    gray300: '#d1d5db',
    gray500: '#6b7280',
    gray700: '#374151',
  },
  media: {
    mobile: '(max-width: 390px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 1024px)',
  },
  sizes: {
    headerHeight: 60,
    sidebarWidth: 240,
    columnWidth: 300,
  },
  durations: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  order: {
    modal: 1000,
    dropdown: 100,
    header: 50,
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
};