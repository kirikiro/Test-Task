import React from 'react';
import * as S from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          {title}
          <S.CloseButton onClick={onClose}>×</S.CloseButton>
        </S.ModalHeader>
        {children}
      </S.ModalContent>
    </S.Overlay>
  );
};