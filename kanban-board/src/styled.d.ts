import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      danger: string;
      warning: string;
      bg: string;
      font: string;
      white: string;
      gray100: string;
      gray300: string;
      gray500: string;
      gray700: string;
    };
    media: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    sizes: {
      headerHeight: number;
      sidebarWidth: number;
      columnWidth: number;
    };
    durations: {
      fast: number;
      normal: number;
      slow: number;
    };
    order: {
      modal: number;
      dropdown: number;
      header: number;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
  }
}