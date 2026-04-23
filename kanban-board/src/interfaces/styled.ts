export interface ITheme {
  colors: {
    bg: string; 
    cardBg: string; 
    text: {
      primary: string;
      secondary: string;
    };
    border: string;
    columns: {
      todo: string;
      inProgress: string;
      done: string;
    };
    priority: {
      high: { text: string; bg: string };
      medium: { text: string; bg: string };
      low: { text: string; bg: string };
    };
  };
  sizes: {
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
  };
  media: {
    mobile: string; 
  };
}