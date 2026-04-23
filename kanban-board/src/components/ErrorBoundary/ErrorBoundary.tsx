import { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';
import { Title1, Text } from '@/styles/styles';
import { Button } from '@/components/Button';

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  gap: 16px;
  padding: 20px;
`;

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorWrapper>
          <Title1>Something went wrong</Title1>
          <Text>Please try to reload the page or clear your browser data.</Text>
          <Button onClick={this.handleReload}>Reload Page</Button>
        </ErrorWrapper>
      );
    }

    return this.props.children;
  }
}