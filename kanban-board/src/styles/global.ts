import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  :root {
    --font-family-main: "Inter", sans-serif;

    /* Colors (оставляем без изменений) */
    --brand-5: rgba(238, 242, 255, 1);
    --brand-60: rgba(79, 70, 229, 1);
    --destructive-5: rgba(255, 241, 242, 1);
    --destructive-50: rgba(244, 63, 94, 1);
    --gray-5: rgba(248, 250, 252, 1);
    --gray-10: rgba(241, 245, 249, 1);
    --gray-20: rgba(226, 232, 240, 1);
    --gray-30: rgba(203, 213, 225, 1);
    --gray-60: rgba(71, 85, 105, 1);
    --gray-80: rgba(30, 41, 59, 1);
    --gray0-white: rgba(255, 255, 255, 1);
    --success-5: rgba(240, 253, 244, 1);
    --success-50: rgba(34, 197, 94, 1);
    --warning-5: rgba(255, 251, 235, 1);
    --warning-50: rgba(245, 158, 11, 1);

    --heading-sm-extrabold-font-family: var(--font-family-main);
    --heading-sm-extrabold-font-size: 30px;
    --heading-sm-extrabold-font-weight: 800;
    --heading-sm-extrabold-line-height: 38px;
    --heading-sm-extrabold-letter-spacing: -0.39px;

    --paragraph-md-font-family: var(--font-family-main);
    --paragraph-md-font-size: 16px;
    --paragraph-md-font-weight: 400;
    --paragraph-md-line-height: 160%;

    --text-md-bold-font-family: var(--font-family-main);
    --text-md-bold-font-size: 16px;
    --text-md-bold-font-weight: 700;
    --text-md-bold-line-height: 22px;

    --text-sm-semibold-font-family: var(--font-family-main);
    --text-sm-semibold-font-size: 14px;
    --text-sm-semibold-font-weight: 600;
    --text-sm-semibold-line-height: 20px;
    
    --text-xs-semibold-font-family: var(--font-family-main);
    --text-xs-semibold-font-size: 12px;
    --text-xs-semibold-font-weight: 600;
    --text-xs-semibold-line-height: 16px;

    --shadow-md: 0px 2px 4px -2px rgba(23, 23, 23, 0.06), 0px 4px 8px -2px rgba(23, 23, 23, 0.1);
    --radius-full: 9999px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family-main);
  }

  body {
    background-color: var(--gray0-white);
    color: var(--gray-80);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-family-main);
  }

  button, input, textarea, select {
    font-family: var(--font-family-main);
    outline: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;