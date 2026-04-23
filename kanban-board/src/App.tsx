import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from '@/store';
import { theme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/global';
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';
import { BoardPage } from '@/pages/BoardPage';

const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter basename="/Test-Task">
          <Routes>
            <Route path="/" element={<BoardPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>
);

export default App;
