import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.order.modal};
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: 90%;
  max-width: 500px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 18px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;