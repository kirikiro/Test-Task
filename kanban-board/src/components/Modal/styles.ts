import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.large};
  width: 100%;
  max-width: 450px;
  padding: 24px;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text.secondary};
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;