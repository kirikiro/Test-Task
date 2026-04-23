import React from 'react';
import styled from 'styled-components';
import { AnalyticsDashboard } from '@/pages/styles';
import { Button } from '@/components/Button';
import { getTransition } from '@/utils/styles';

const SidebarContainer = styled.header`
  align-items: center;
  background-color: var(--gray0-white);
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid var(--gray-10);
  ${getTransition()}

  @media (max-width: 390px) {
    padding: 12px 24px;
  }
`;

interface IAppSidebarProps {
  onAddColumn: () => void;
}

export const AppSidebar: React.FC<IAppSidebarProps> = ({ onAddColumn }) => {
  return (
    <SidebarContainer>
      <AnalyticsDashboard style={{ fontSize: '24px' }}>
        Kanban
      </AnalyticsDashboard>
      <Button variant="solid" onClick={onAddColumn} style={{ padding: '8px' }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>
      </Button>
    </SidebarContainer>
  );
};