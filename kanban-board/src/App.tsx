import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/global';
import { store } from '@/store';
import KanbanBoard from '@/pages/KanbanBoard';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <KanbanBoard />
      </ThemeProvider>
    </Provider>
  );
}

export default App;