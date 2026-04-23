import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as S from './styles';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <S.Overlay onClick={handleOverlayClick}>
      <S.ModalContainer>
        <S.CloseButton onClick={onClose}>✕</S.CloseButton>
        {children}
      </S.ModalContainer>
    </S.Overlay>,
    document.body
  );
};