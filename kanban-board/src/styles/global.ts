import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.font};
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
  }
  ul, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;