import styled from "styled-components";

export const DesktopContainer = styled.div`
  background-color: var(--gray0-white);
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Frame14 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const DivWrapper = styled.div`
  background-color: var(--gray-5);
  padding: 32px;
  border-bottom: 1px solid var(--gray-10);
  width: 100%;
  display: flex;
  justify-content: flex-start; 
`;

export const Frame15 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AnalyticsDashboard = styled.h1`
  color: var(--gray-80);
  font-family: var(--heading-sm-extrabold-font-family);
  font-size: var(--heading-sm-extrabold-font-size);
  font-weight: 800;
  margin: 0;
  text-align: left;
`;

export const Frame17 = styled.div`
  flex: 1;
  padding: 32px;
  background-color: var(--gray0-white);
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
`;

export const Frame18 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  min-width: max-content; 

  @media (max-width: 390px) {
    flex-direction: column; 
    align-items: center;
    min-width: 100%;
    width: 100%;
    gap: 40px;
  }
`;

export const ButtonIconWrapper = styled.div`
`;